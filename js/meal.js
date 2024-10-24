// Meals filter
const urlParams = new URLSearchParams(window.location.search)
const mealid = urlParams.get('id')

function fetchMealDetails(idMeal) {
    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        type: 'GET',
        dataType: 'json',
        
        success: function(result) {
            let meals = result.meals[0]

            $('#meals').append(`
            <h3>`+ meals.strMeal+`</h3>
            <p class="pt-2">`+meals.strCategory+`, `+ meals.strArea +`</p>
            <hr>
            <div class="pt-3 p-3 pb-4" id="meal-filter">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <img src="`+ meals.strMealThumb +`" class="img-fluid rounded shadow" alt="">
                    </div>
                    <div class="col-md-8">
                        <h3>Ingredients</h3>
                        <ul>
                            <li>`+meals.strIngredient1+`</li>
                            <li>`+meals.strIngredient2+`</li>
                            <li>`+meals.strIngredient3+`</li>
                            <li>`+meals.strIngredient4+`</li>
                            <li>`+meals.strIngredient5+`</li>
                            <li>`+meals.strIngredient6+`</li>
                            <li>`+meals.strIngredient7+`</li>
                            <li>`+meals.strIngredient8+`</li>
                            <li>`+meals.strIngredient9+`</li>
                            <li>`+meals.strIngredient10+`</li>
                            <li>`+meals.strIngredient11+`</li>
                            <li>`+meals.strIngredient12+`</li>
                        </ul>
                        <h3>Instruction</h3>
                        <p class="ingredients p-3">`+meals.strInstructions+`</p>
                        <div class="d-flex justify-content-center">
                            <iframe src="`+meals.strYoutube+`?controls=0" width="580" height="390"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            `)
        },
        error:function() {
            $('#meal-filter').html(`
            <p>Data Gagal Diambil.</p>
            `)
        }
    })
}

if (mealid){
    fetchMealDetails(mealid)
}