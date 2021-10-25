// (function() {
//   // VARS
//   const productsContainer = document.querySelector("#grid");
//   const cartContainer = document.querySelector("#shopping-cart");
//   const cartContent = document.querySelector("#cart-content");
//   const toggleCartBtn = document.querySelector("#toggle-cart-btn");
//   const clearCartBtn = document.querySelector("#clear-cart");
//   const checkoutBtn = document.querySelector("#checkout-btn");


//   // FUNCTIONS

//   function toggleCart() {
//     // toggle shopping cart visibility
//     cartContainer.classList.toggle("open");
//   }

//   function getLSContent() {
//     // get contents from local storage.
//     // if nothing is there, create an empty array
//     const lsContent = JSON.parse(localStorage.getItem("Recipes")) || [];
//     return lsContent;
//   }

//   function setLSContent(lsContent) {
//     // save content inside local storage
//     localStorage.setItem("Recipes", JSON.stringify(lsContent));
//   }



//     if (nums.length > 0) {
//       for (let cell = 0; cell < nums.length; cell++) {
//         let num = nums[cell].innerText;
//         num = num.replace(/[^\d]/g, "");
//         num = parseFloat(num);
//         prices.push(num);
//       }
//       // return the prices array
//       return prices;
//     } else {
//       return;
//     }
//   }



//   function displayRecipes() {
//     // display all products in the cart

//     // get contents from local storage
//     const lsContent = getLSContent();
//     let productMarkup = "";
//     // if local storage is not empty, build the
//     // cart items markup and the appropriate details
//     if (lsContent !== null) {
//       for (let product of lsContent) {
//         productMarkup += `
//           <tr>
//           <td><img class="cart-image" src="${product.image}" alt="${
//           product.name
//         }" width="120"></td>
//           <td>
//             ${product.name}
//           </td>
//           <td>${product.lsContent}</td>
//           <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
//           </tr>
//         `;
//       }
//     } 
//     // add markup to DOM
//     cartContent.querySelector("tbody").innerHTML = productMarkup;
//   }

//   function saveProduct(clickedBtn) {
//     // save selected product in local storage and display it in the cart together

//     // vars
//     const productId = clickedBtn.getAttribute("data-id");
//     const card = clickedBtn.parentElement.parentElement;
//     const cardInfo = clickedBtn.parentElement;
//     const prodImage = card.querySelector("img").src;
//     const prodName = cardInfo.querySelector("h4").textContent;
//     const prodPrice = cardInfo.querySelector(".card__price").textContent;

//     let isProductInCart = false;

//     // get local storage array
//     const lsContent = getLSContent();

//     // to avoid user adds the same course twice, check
//     // the product is not in LS already before adding it
//     lsContent.forEach(function(product) {
//       if (product.id === productId) {
//         alert("This course is already in your cart.");
//         isProductInCart = true;
//       }
//     });

//     // only if the product is not already in the cart,
//     // create an object representing selected product info
//     // and push it into local storage array
//     if (!isProductInCart) {
//       lsContent.push({
//         id: productId,
//         image: prodImage,
//         name: prodName,
//         price: prodPrice
//       });

//       // add product into into local storage
//       setLSContent(lsContent);
//       // update the display of courses in the shopping cart
//       displayProducts();
//     }
//   }

//   function removeProduct(productId) {
//     // remove product from cart (and from local storage)

//     // retrieve list of products from LS
//     const lsContent = getLSContent();

//     // get the index of the product item to remove
//     // inside the local storage content array
//     let productIndex;
//     lsContent.forEach(function(product, i) {
//       if (product.id === productId) {
//         productIndex = i;
//       }
//     });

//     // modify the items in local storage array
//     // to remove the selected product item

//     lsContent.splice(productIndex, 1);
//     // update local storage content
//     setLSContent(lsContent);

//     displayProducts();
//   }

//   function clearCart() {
//     // clear all products from cart (and local storage)

//     // retrieve list of products from LS
//     const lsContent = getLSContent();
//     // empty array in local storage
//     lsContent.splice(0, lsContent.length);
//     // update local storage
//     setLSContent(lsContent);
//     // display cart content again
//     displayProducts();
//   }

//   function checkout() {
//     // checkout: just clear the cart
//     // after user confirms the checkout process
//     const cartProducts = cartContent.querySelector("tbody").innerHTML;
//     if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
//       clearCart();
//     } else {
//       return;
//     }
//   }

// recipe = [{},{},{},...]

// const recipes = [{
//     name: "Burger",
//     ingredients: ` 
//    Half a kilo of minced meat.

//   Medium sized onion.

//   amount of garlic.

//   2 tablespoons of flour

//   A cup of rusk

//   spoon of salt

//   spoon of black pepper
//   an egg`,
//     steps: `The meat is finely chopped, as well as the onions, then put together in the kibbeh, and they are mixed well

//   Add the flour breadcrumbs salt and black pepper to the mixture and mix well.

//   Put a beaten egg on the mixture, and mix them well.

//   The ingredients are placed in a plastic bag, kept in the refrigerator and left for at least 3 hours.

//   - We take out the dough and it is straightened and cut to the appropriate size then the burger is formed
//   into
//   medium-sized circles.

//   The hamburger discs are placed in the refrigerator and each disc is separated from the other with a plastic
//   bag.

//   - The burger is taken out of the refrigerator before use and then fried in oil or on the grill.

//   - Placed in a serving dish, or placed in bread greased with ketchup and mayonnaise, with the addition of
//   lettuce tomato slices and cucumber`,
//   }, {
//     name: "Waffle",
//     ingredients: `cups all-purpose flour
// 1 teaspoon salt
// 4 teaspoons baking powder
// 2 tablespoons white sugar
// 2 eggs
// 1 ½ cups warm milk
// ⅓ cup butter melted
// 1 teaspoon vanilla extract`,
//     steps: `Step 1
// In a large bowl, mix together flour, salt, baking powder and sugar; set aside. Preheat waffle iron to desired temperature.

// Step 2
// In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla. Pour the milk mixture into the flour mixture; beat until blended.

// Step 3
// Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp. Serve immediately.`
//   }, {
//     name: "Biryani",
//     ingredients: `1 cup boiled basmati rice
//   1/2 teaspoon mint leaves
//   salt as required
//   2 tablespoon refined oil
//   3 green cardamom
//   2 clove
//   2 onion
//   1 teaspoon turmeric
//   1 tablespoon garlic paste
//   1 cup hung curd
//   2 tablespoon coriander leaves
//   water as required
//   1 tablespoon ghee
//   600 gm chicken
//   1 tablespoon garam masala powder
//   1 teaspoon saffron
//   1 tablespoon bay leaf
//   1 black cardamom
//   1 teaspoon cumin seeds
//   4 green chillies
//   1 tablespoon ginger paste
//   1 teaspoon red chilli powder
//   1/2 tablespoon ginger
//   2 drops kewra`,
//     steps: ` Step 1 Prepare saffron and kewra water
// To make delightful chicken biryani, soak saffron in water to prepare saffron water.
//  Next, mix kewra drops in water and mix well to make kewra water.
//  Step 2 Saute onions and tomatoes for 2-3 minutes
// In the meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough. Add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion in it and saute until pink. Now, add chicken into it with slit green chillies,
// turmeric, salt to taste, ginger garlic paste, red chilli powder, and green chilli paste.
// Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it
// Step 3 Cook biryani on low heat for 5-6 minutes
// Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves.
// Add kewra water, rose water and saffron water in it. Cook till the chicken is tender.
// Step 4 Serve hot chicken biryani with your favourite chutney or raita
// Then add 1 cup cooked rice and spread evenly. Then add saffron water and pour ghee over it. Cook for 15-20 minutes with closed lid 
// and garnish with 1 tbsp fried onions and coriander leaves. Serve hot chicken biryani.`

//   }, {
//     name: "Spring Rolls",
//     ingredients: ` 2 ounces rice vermicelli
//   8 rice wrappers (8.5 inch diameter)
//   8 large cooked shrimp - peeled, deveined and cut in half
//   1 ⅓ tablespoons chopped fresh Thai basil
//   3 tablespoons chopped fresh mint leaves
//   3 tablespoons chopped fresh cilantro
//   2 leaves lettuce, chopped
//   4 teaspoons fish sauce
//   ¼ cup water
//   2 tablespoons fresh lime juice
//   1 clove garlic, minced
//   2 tablespoons white sugar
//   ½ teaspoon garlic chili sauce
//   3 tablespoons hoisin sauce
//   1 teaspoon finely chopped peanuts`,
//     steps: `  Step 1
//   Bring a medium saucepan of water to boil. Boil rice vermicelli 3 to 5 minutes, or until al dente, and drain.
  
//   Step 2
//   Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften. Lay wrapper flat. In a row across the center, place 2 shrimp halves, a handful of vermicelli, basil, mint, cilantro and lettuce, leaving about 2 inches uncovered on each side. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce. Repeat with remaining ingredients.
  
//   Step 3
//   In a small bowl, mix the fish sauce, water, lime juice, garlic, sugar and chili sauce.
  
//   Step 4
//   In another small bowl, mix the hoisin sauce and peanuts.
  
//   Step 5
//   Serve rolled spring rolls with the fish sauce and hoisin sauce mixtures.`
//   }, {
//     name: "Sambosa",
//     ingredients: ` 1 large russet potato, peeled and cut into large chunks
//   1 tbsp. ghee
//   1 tsp. cumin seeds
//   1 green chili, diced
//   2 tsp. freshly grated ginger
//   1 tsp. garam masala
//   1 tsp. turmeric
//   1/2 tsp. asafoetida
//   1/4 tsp. amchur
//   1/2 c. frozen pea, thawed
//   1/4 c. chopped fresh cilantro
//   Kosher salt
//   FOR DOUGH
//   2 c. all-purpose flour
//   1 tsp. ajwain seeds
//   1/2 tsp. kosher salt
//   4 tbsp. melted ghee
//   6 tbsp. ice water
//   Vegetable oil, for frying
//   Mint chutney, for serving`,
//     steps: `
//   Make the filling: Place potato into a medium pot and cover with water. Bring to a boil and cook until potatoes are fork tender, 8 to 10 minutes; drain. Use a fork to smash potatoes into smaller chunks with still some bigger pieces remaining.
// In a medium skillet, melt ghee over medium heat. Add cumin and cook until darkened and fragrant, about 1 minute. Add green chili and ginger and cook, stirring, 1 minute more. Add potatoes and spices and toss to coat. Stir in peas and cilantro and season with salt to taste. Remove from heat and let cool. 
// Make the dough: In a large bowl, combine flour, ajwain seeds, and salt. Add ghee and ice water and stir until dough comes together. Adding more water 1 tablespoon at a time as needed until dough holds together easily without feeling sticky. Form into a disc and cover in plastic wrap. Let rest at room temperature for 30 minutes.  
// Make the samosas: Divide dough into 6 equal pieces and roll each piece into a ball. Work with one ball of dough at a time and keep remaining dough covered with plastic wrap to prevent them from drying out. 
// Roll each piece of dough into an oval that’s ¼” thick and about 7” long and 5” wide. Cut in half crosswise. Wet the cut side of dough with a little water and bring the edges together to form a cone, pressing to seal. (Check the tip is sealed as well.) Hold the cone in one hand and fill with about 1 tablespoon of filling. Wet the edges with more water and press together to seal. Repeat with remaining dough and filling. 
// Fill a large, heavy- bottomed pot with about 2” of oil and fit with a deep fry thermometer. Place over medium heat until oil reaches 350°. A small piece of dough dropped into the oil should take a few seconds to start bubbling and rise to the surface. Without overcrowding the pot, working in batches if necessary, add samosas to oil and fry, turning occasionally, until deeply golden, about 10 to 12 minutes, adjusting heat as necessary to keep oil at 350°F. Using tongs or a slotted spoon, transfer samosas to a paper towel-lined plate as they are ready. Let cool slightly before serving.
// Serve warm with chutney.`
//   },
//   {
//     name: "Sausage",
//     ingredients: `4 sheets ready rolled puff pastry

//   1 tbsp milk
  
//   1 egg
  
//   500g veal mince, or beef mince
  
//   500g sausage mince
  
//   1 small brown onion, finely chopped
  
//   1 small red onion, finely chopped
  
//   1 medium carrot, coarsely grated
  
//   3 cloves garlic, crushed
  
//   1/4 cup finely chopped fresh flat-leaf parsley
  
//   1 1/2 tbsp tomato sauce
  
//   1/4 cup (60ml) worcestershire sauc`,
//     steps: `Step 1
// Preheat oven to 220C/200C fan-forced. Line 2 large baking trays with baking paper.
// Step 2
// Thaw puff pastry
// Unsure of the quantity needed?
// Click on the underlined ingredient to reveal the quantity. No need to flip back and forth!

// . Meanwhile, combine milk and egg in a small jug. Whisk well. Combine veal mince, sausage mince, onion, carrot, garlic, parsley and sauces in a large bowl. Season with salt and pepper. Divide mixture into 8.

// Step 3
// Lay a sheet of pastry on a flat surface. Cut sheet in half horizontally. Spoon 1/8 of the mince mixture down along the long side of one pastry half, shaping mince into a long sausage shape. Brush opposite long edge with a little egg mixture
// Step 4
// Roll up pastry to enclose filling, finishing seam side down. Brush top of log with egg mixture. Cut into 6 short pieces. Place pieces, seam side down on prepared tray, 2cm apart. Repeat with remaining mince mixture, pastry and eggwash.
// Step 5
// Bake for 25-30 minutes or until golden and cooked through.`
//   }, {
//     name: "Chicken Grill",
//     ingredients: `2 oranges, zested and juiced
//   2 lemons, zested and juiced
//   2 limes, zested and juiced
//   1 teaspoon ground coriander
//   ½ teaspoon dried red pepper flakes
//   2 tablespoons olive oil
//   ¼ cup wildflower honey
//   6 skinless, boneless chicken breast halves - pounded to about 3/4-inch thickness
//   salt and pepper to taste`,
//     steps: `Step 1
//   Stir the orange zest, orange juice, lemon zest, lemon juice, lime zest, lime juice, 
//   coriander, red pepper flakes, olive oil, and honey together in a shallow dish. 
//   Remove about 1/4 cup of the mixture and set aside for later. Add the chicken breasts to the remaining marinade, turning to coat both sides. Cover with plastic wrap and refrigerate, turning occasionally, 1 to 4 hours.
  
//   Step 2
//   Preheat an outdoor grill for high heat, and lightly oil the grate.\
//    Remove the chicken breasts from the marinade; discard the marinade.
  
//   Step 3
//   Basting frequently with the reserved sauce, cook the chicken on the preheated 
//   grill until no longer pink in the center and the juices run clear, about 5 minut`
//   }, {
//     name: "Mento",
//     ingredients: `A cup and a quarter of water. Small spoon of salt. Three cups of flour. Filling ingredients: a large onion, cut into small cubes. Small spoon of salt. Three hundred grams of minced lamb. Pinch of freshly ground black pepper. Three tablespoons of parsley - as desired. Ingredients for chard and sauce: slices of lemon. Small spoon of salt. Water. A cup each of: Labneh and Yogurt. Two tablespoons of olive oil. Four cloves of finely crushed garlic. a little water A tablespoon each of: mint, tomato sauce, and ketchup. A
//   sprinkle of sumac. A tablespoon of crushed red pepper - optional.`,
//     steps: ` Preparation of the dough and filling: Mix the dry ingredients, then knead with water,
//   until the dough becomes cohesive. Leave the dough for a quarter of an hour to rest. 
//   Roll out the dough, then cut it into circles, stuff it with the filling and then close it well.
//    Repeat the method for all the dough until the amount is used up. Mix the filling ingredients well by hand, then use. Preparation of the application: Bring a bowl consisting of two pieces, so that the upper part is a strainer, and the lower part is a bowl. Grease the filter with ghee, then line up the stuffed mantou pieces. Fill a third of the bowl with water, then add salt and lemon slices. Put the strainer over the pot, then cover it and put it on a low heat for about an hour. 
//  Prepare the sauce and serve: Mix the garlic, yoghurt and labneh well.`
//   }
// ]


$("#burger").on('click', () => {
  //window.localStorage.setItem("recipe1",JSON.stringify(recipes[0]))
  // const chicken = JSON.parse(window.localStorage.getItem("recipe1"))
  sessionStorage.setItem('Burger', Burger);
  alert(sessionStorage.getItem('Burger'));
});

$("#waffle").on('click', () => {
  window.localStorage.setItem("recipe2", JSON.stringify(recipes[1]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe2"))
})
$("#Biryani").on('click', () => {
  window.localStorage.setItem("recipe3", JSON.stringify(recipes[2]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe3"))
})
$("#Spring Rolls").on('click', () => {
  window.localStorage.setItem("recipe4", JSON.stringify(recipes[3]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe4"))
})
$("#Sambosa").on('click', () => {
  window.localStorage.setItem("recipe5", JSON.stringify(recipes[4]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe5"))
})
$("#Sausage").on('click', () => {
  window.localStorage.setItem("recipe6", JSON.stringify(recipes[5]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe6"))
})
$("#chicken").on('click', () => {
  window.localStorage.setItem("recipe7", JSON.stringify(recipes[6]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe7"))
})
$("#Mento").on('click', () => {
  window.localStorage.setItem("recipe8", JSON.stringify(recipes[7]))
  const chicken = JSON.parse(window.localStorage.getItem("recipe8"))
})