async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

function append(data, place) {
  data.meals.forEach((el) => {
    let div = document.createElement("div");

    let meal_id = document.createElement("p");

    let meal_name = document.createElement("p");

    let img = document.createElement("img");

    img.src = el.strMealThumb;
    //  console.log(img.src) ;

    meal_id.innerText = el.idMeal;

    meal_name.innerText = el.strMeal;

    div.append(img, meal_id, meal_name);

    place.append(div);
  });
}

export { getData, append };
