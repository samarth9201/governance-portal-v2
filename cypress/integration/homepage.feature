Feature: Governance Main Page

  I want to see all the main features of the main page
  
  @focus
  Scenario: Opening the main page
    Given navigate to "/" page
    Then I see "MakerDAO governance" in the "h1"