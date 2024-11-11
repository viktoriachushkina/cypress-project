describe('Request', () => {

    beforeEach(() => {
    });

    it('Request test', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            cy.log(JSON.stringify(response.body))
        });
    });

    it('Request test', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('body').should('have.length', 10);
          
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
          .its('status')
          .should('eq', 200);
    });

    it('Request POST', () => {
        const newPost = {
            title: 'New',
            body: 'bar',
            userId: 1
        };
    
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost)
          .as('postResponse')
          .its('body.id')
          .should('eq', 101);
    
        cy.get('@postResponse').its('body.title').should('eq', newPost.title);
        cy.get('@postResponse').its('body.body').should('eq', newPost.body);
    });
    
});

  
    

