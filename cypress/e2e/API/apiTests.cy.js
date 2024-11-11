/// <reference types="cypress" />

describe('API Tests for Cars', () => {

    it('GET cookies', () => {
        const userCreds = {
            email: 'viktoriacuskina@gmail.com',
            password: 'Test123456789',
            remember: true
        };

        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds)
          .then((response) => {
            const headers = response.headers;  
            const cookies = headers['set-cookie'];  
            let sid = '';
            if (cookies) {
                for (const cookie of cookies) {
                    if (cookie.trim().startsWith('sid=')) {  
                        sid = cookie.trim().split('=')[1].split(';')[0];
                        break;
                    }
                }
            }

            cy.log(`SID: ${sid}`);
            cy.setCookie('sid', sid);
           
           
            it('GET Cars - Get list of car models', () => {
                cy.request({
                    method: 'GET',
                    url: 'https://qauto.forstudy.space/api/cars',
                    headers: {
                       
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.status).to.eq('ok');
                    expect(response.body.data).to.be.an('array');
                });
            });
            it('POST Car - Add a new car', () => {
                const newCar = {
                    
                        "status": "ok",
                        "data": [
                            {
                                "id": 201105,
                                "carBrandId": 4,
                                "carModelId": 18,
                                "initialMileage": 6666,
                                "updatedMileageAt": "2024-11-05T20:58:49.000Z",
                                "carCreatedAt": "2024-11-05T20:58:49.000Z",
                                "mileage": 6666,
                                "brand": "Porsche",
                                "model": "Panamera",
                                "logo": "porsche.png"
                            },
                            {
                                "id": 201104,
                                "carBrandId": 2,
                                "carModelId": 8,
                                "initialMileage": 5555,
                                "updatedMileageAt": "2024-11-05T20:58:40.000Z",
                                "carCreatedAt": "2024-11-05T20:58:40.000Z",
                                "mileage": 5555,
                                "brand": "BMW",
                                "model": "X5",
                                "logo": "bmw.png"
                            },
                            {
                                "id": 201103,
                                "carBrandId": 1,
                                "carModelId": 1,
                                "initialMileage": 777,
                                "updatedMileageAt": "2024-11-05T20:58:31.000Z",
                                "carCreatedAt": "2024-11-05T20:58:31.000Z",
                                "mileage": 777,
                                "brand": "Audi",
                                "model": "TT",
                                "logo": "audi.png"
                            }
                        ]
                    
                };
            
                cy.request({
                    method: 'POST',
                    url: 'https://qauto.forstudy.space/api/cars',
                    headers: {
                       
                    },
                    body: newCar
                }).then((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body.status).to.eq('ok');
                    expect(response.body.data).to.have.property('id'); 
                    expect(response.body.data).to.have.property('mileage', 100);
                    
                    
                    cy.wrap(response.body.data.id).as('newCarId');
                });
            });
            it('DELETE Car - Delete a car', function () {
                
                cy.get('@newCarId').then((carId) => {
                    cy.request({
                        method: 'DELETE',
                        url: `https://qauto.forstudy.space/api/cars/${carId}`,
                        headers: {
                            
                        }
                    }).then((response) => {
                        expect(response.status).to.eq(200);
                        expect(response.body.status).to.eq('ok');
                    });
                });
            });
                        
            
        });
    });
});