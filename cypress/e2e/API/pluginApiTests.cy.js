import 'cypress-plugin-api';

describe('API Tests for Cars', () => {
    before(() => {
        const userCreds = {
            email: 'viktoriacuskina@gmail.com',
            password: 'Test123456789',
            remember: true
        };

        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            expect(response.status).to.eq(200);
            const cookies = response.headers['set-cookie'];
            let sid = '';

            if (cookies) {
                for (const cookie of cookies) {
                    if (cookie.trim().startsWith('sid=')) {
                        sid = cookie.trim().split('=')[1].split(';')[0];
                        break;
                    }
                }
            }

            cy.setCookie('sid', sid);
        });
    });

    it("GET API testing Using Cypress API Plugin", () => {
        cy.api({
            method: "GET",
            url: "https://qauto.forstudy.space/api/cars",
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.be.an('array');
        });
    });

    it("POST API testing - Add multiple cars", () => {
        const cars = [
            {
                carBrandId: 4,
                carModelId: 18,
                initialMileage: 6666,
                mileage: 6666,
                brand: "Porsche",
                model: "Panamera",
                logo: "porsche.png"
            },
            {
                carBrandId: 2,
                carModelId: 8,
                initialMileage: 5555,
                mileage: 5555,
                brand: "BMW",
                model: "X5",
                logo: "bmw.png"
            },
            {
                carBrandId: 1,
                carModelId: 1,
                initialMileage: 777,
                mileage: 777,
                brand: "Audi",
                model: "TT",
                logo: "audi.png"
            }
        ];

        cars.forEach(car => {
            cy.request({
                method: "POST",
                url: "https://qauto.forstudy.space/api/cars",
                headers: {
                    
                },
                body: car
            }).then((response) => {
                expect(response.status).to.eq(201); // Проверка, что автомобиль успешно добавлен
                expect(response.body.status).to.eq('ok');
                expect(response.body.data).to.have.property('id'); // Убедиться, что создан объект с ID
                cy.log(`Added car ID: ${response.body.data.id}`);
            });
        });
    });
});

