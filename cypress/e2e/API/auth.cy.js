describe('AUTH', () => {

    beforeEach(() => {
        // Здесь можно выполнить дополнительную настройку перед каждым тестом, если нужно
    });

    it('GET cookies', () => {
        const userCreds = {
            email: 'viktoriacuskina@gmail.com',
            password: 'Test123456789',
            remember: true
        };

        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds)
          .then((response) => {
            const headers = response.headers;  // Исправлено с Response на response
            const cookies = headers['set-cookie'];  // Здесь получаем массив cookies

            // Переменная для хранения значения `sid`
            let sid = '';

            // Проверка, что массив cookies существует и имеет значения
            if (cookies) {
                for (const cookie of cookies) {
                    if (cookie.trim().startsWith('sid=')) {  // Исправлено startWith на startsWith
                        sid = cookie.trim().split('=')[1].split(';')[0];
                        break;
                    }
                }
            }

            cy.log(`SID: ${sid}`);
            
            // Установка куки sid для дальнейшего использования в запросах
            cy.setCookie('sid', sid);

            // Добавьте здесь любые дополнительные проверки, если это необходимо
        });
    });
});

    

