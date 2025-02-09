require "rails_helper"

RSpec.feature "User can vist the homepage"  do
    scenario "and see the welcome message" do
        visit "/"

        expect(page).to have_content("Welcome to Eunny Videos")
    end
end