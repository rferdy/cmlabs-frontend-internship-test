// Category list
$.ajax ({
    url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    type: 'GET',
    dataType: 'json',

    success: function (result) {
        let categories = result.categories

        $.each(categories, function (i, data){
            $('#category-list').append(`
                <div class="card mb-3 text-center shadow" data-category=`+ data.strCategory +`>
                    <img src="`+ data.strCategoryThumb +`" alt="`+ data.strCategory +`" class="card-img">
                    <div class="glass-overlay d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center">`+ data.strCategory +`</p>
                    </div>
                </div>
            `)
        })

        $('.card').click(function () {
            const category = $(this).attr('data-category')
            window.location.href = `category.html?category=${category}`
        })
    }
})