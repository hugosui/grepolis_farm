/// <reference types="cypress" />

const pseudo:string = "" //pseudo
const password:string ="" //password
const url:string ="" //https://X.grepolis.com/game
const world:string ="" //world of your empire



context('Script to farm village of farmers ', () => {
    it('Login', () => {
        cy.visit(url) 
        cy.get('#login_userid').type(pseudo) //pseudo
        cy.get('#login_password').type(password) 
        cy.get('#login_Login').click()
    })

    it('Search villages of farmers then collect ressources', () => {
        cy.get('#worlds').contains(world).click()
        cy.get('li[class^="ranking main_menu_item   "]').click()
        cy.get('.loggedin_player > .r_name > .gp_player_link').click().within(() => { })
        cy.get('a[class^="gp_town_link"').click()
        cy.get('#info').click()
        cy.wait(500)
        cy.get('.game_list > :nth-child(2) > .gp_island_link').click()
        cy.get('#island_info').click()
        cy.get('li[class^="odd farm_town_el_238"').within(() => { //farm town
            cy.get('a[class^="gp_town_link"]').click()
        })
        cy.get(':nth-child(1) > .card_click_area').click()
    })
})
