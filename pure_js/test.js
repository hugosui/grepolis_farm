function getVillageName() {
    var text = document.getElementsByClassName("village_name")
    var village_name_output = text[0].innerText
    console.log(village_name_output)
    return village_name_output
  }
  const nb_farm_towns = 6
  let i = 0
  function farm() {
    window.setTimeout(function () {
      document.querySelector("div.action_card.resources_bpv > div.card_click_area > div.btn_claim_resources.button.button_new").click();
          window.setTimeout(function () {
              getVillageName();
              window.setTimeout(function () {
                  document.querySelector("div.btn_next.square.next_prev.small.button.button_new").click();
              },1000);
          }, 1000);   
    }, 1000);
  };
  
  for (let step = 0; step < 2; step++) {
    // Runs 5 times, with values of step 0 through 4.
    farm();
    console.log(step);
  }