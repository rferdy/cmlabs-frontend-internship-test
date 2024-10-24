// Category filter
function getCategory() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('category')
}

function fetchMealsByCategory(category) {
    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        type: 'GET',
        dataType: 'json',
        success: function(result) {
            let meals = result.meals

            $.each(meals, function(i, data) {
                $('#category-filter').append(`
                <div class="card kartu mb-3 text-center shadow" data-meal="`+ data.idMeal+`">
                    <img src="`+ data.strMealThumb+ `" class="card-img" alt="gmb">
                    <div class="glass-overlay d-flex justify-content-center align-items-center">
                        <p class="card-title">`+ data.strMeal +`</p>
                    </div>
                </div>
                `)
            })

            $('.kartu').click(function () {
                const idMeal = $(this).attr('data-meal')
                window.location.href = `meal.html?id=${idMeal}`
            })
        },
        error:function() {
            $('#category-filter').html(`
            <p>Data Gagal Diambil.</p>
            `)
        }
    })
}

// Jumbotron
$.ajax ({
    url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        const categories = data.categories
        const selectedCategories = categories.find(c => c.strCategory === category)

        if (selectedCategories) {
            $('#category-desc').html(`
                <div class="row">
                    <div class="col-md-4 mb-3 d-flex align-items-center">
                        <img src="`+ selectedCategories.strCategoryThumb +`" alt="`+ selectedCategories.strCategory +`">
                    </div>
                    <div class="col-md-8 mb-3">
                        <div class="card shadow p-3">
                            <h2>`+ selectedCategories.strCategory +`</h2>
                            <p>`+ selectedCategories.strCategoryDescription +`</p>
                        </div>
                    </div>
                </div>
            `)
        }
    }
})

const category = getCategory()
if(category) {
    fetchMealsByCategory(category)
}