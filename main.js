 var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];
    
var selectElement = document.getElementById('planets');
planets.reverse();
planets.forEach(function(planet) {
    
    var option = document.createElement('option');
    
    var planetName = planet[0];
    
    option.text = planetName;
    option.value = planetName;
    
    selectElement.appendChild(option);
});
        
function calculateWeight(weight, planetName) { 
    for (var i = 0; i < planets.length; i++) {
        var name = planets[i][0];
        var multiplier = planets[i][1];

        if (name === planetName) {
            // Just return the raw calculation here
            return weight * multiplier;
        }
    }
}
    function handleClickEvent(e) {
         var userWeight = parseFloat(document.getElementById('user-weight').value);
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);
    
    if (isNaN(userWeight)) {
        alert("Please enter a valid number for weight.");
    }
       document.getElementById('output').innerHTML = "If you were on " + planetName + ", you would weigh " + result.toFixed(2) + "lbs!";
    }
document.getElementById('calculate-button').onclick = handleClickEvent;