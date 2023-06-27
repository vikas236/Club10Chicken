// Import css files
import "./css/body.css";
import "./css/navbar.css";
import "./css/footer.css";

// Import images
import "./images/greyish_stroke.svg";
import "./images/black_stroke.svg";
import "./images/white_stroke.svg";
import "./images/plus.svg";
import "./images/logo.png";
import "./images/description.png";

// Calling html elements
const section_name = document.querySelectorAll(".section_name");
const section = document.querySelectorAll(".section");
const main = document.querySelector("main");
let plus = document.querySelectorAll(".add_dish");
const cart = document.querySelector(".cart");
let increase = document.querySelectorAll(".increase");
let decrease = document.querySelectorAll(".decrease");
let quantity = document.querySelectorAll(".quantity");
const order = document.querySelector(".place_order");
const table = document.querySelector(".table");
const tnum = document.querySelectorAll(".t_num");
let table_num = 1;

// dishes and drinks
const items = [
  [
    "Nutto Brownie",
    "Cheese Cake",
    "Butter Scotch",
    "Choco Trabal",
    "Puttu Ice Cream",
    "Shawarma Ice Cream",
    "Slzzling Brownie",
    "Hazzle Nut Browni",
  ],
  [
    "Salted French Fries",
    "Masala French Fries",
    "Tandoori French Fries",
    "Cheesy French Fries",
    "Veg Nuggets",
    "Sweet Corn",
    "Chicken Cheese Shots",
    "Chicken Fingers (8Pcs)",
    "Chicken Nuggets (8Pcs)",
    "Veg Cheeze Shots",
    "Veg Fingers",
    "Potato Wedges",
    "Salted franch fires",
  ],
  [
    "Nutto Coffee Loaded",
    "Strawberry Monster",
    "Mango Burst",
    "Bubblegum Blast",
    "Mixberry Cheese Blast",
    "Mango Cheese Blast",
    "Butter Scotch",
    "Chocolate Orea",
    "Cheese Cake Fruit",
    "Cold Coffee",
    "Hazelnut Brownie Shake",
    "Nuttella Brownie",
    "Hot Chocolate",
    "Blue Berry",
    "Chocolate Cold Coffee",
    "Caramel Cold Coffee",
    "Hazelnut Shake",
    "Dry Fruit Shake",
    "Choco Almond",
  ],
  [
    "Non Veg Cheese Loaded",
    "Veg Cheese Loaded",
    "Tandoori Mayo Veg",
    "Paneer Mayo",
    "Tandoori Mayo Paneer",
    "Crispy Chicken",
    "Tandoori Mayo Chicken",
    "Veg Cheese Loaded",
  ],
  [
    "Veg Cheese Sandwich",
    "Fried Chicken Sandwich",
    "Paneer Cheese Sandwich",
    "Schezwan Chicken Sandwich",
    "Tandoori Mayo Chicken",
    "Chocolate Sandwich",
    "Veg Tandoori Mayo Sandwich",
    "Egg Cheese Sandwich",
    "Mexican Veg Cheese Sandwich",
    "Mexican Chicken Cheese *Sand",
    "Tomato Chilli Cheese Sandwich",
  ],
  [
    "Fired Chicken Burger",
    "Club 10 Cheesy Tower Burger",
    "Crispy Chicken Burger",
    "Crispy Veg Burger",
    "Crispy Fried Chicken",
    "King Egg Burger",
    "Mexican Veg Cheese Burger",
    "C10C Mexican Chicken Burger",
  ],
  [
    "Water Melon",
    "Apple",
    "Pine Apple",
    "Papaya",
    "Musk Melon",
    "Banana",
    "Black Grape",
    "Green Grape",
    "Chiku (Sapoto)",
    "Pomogrenate",
    "Straw Berry",
    "Nut Case",
  ],
  [
    "Mint Mojito",
    "Blue Curacao",
    "Green Apple Crush",
    "Paan Mojito",
    "Lychee Mojito",
    "Watermelon",
    "Energizer",
    "Blue Ocean",
    "Masala Lemonade",
    "Ice Tea",
    "Bubble Gum Mojito",
    "Black Currant",
    "Malt Mojito(Non-Alcoholic)",
    "Rum Mojito(Non-Alcoholic)",
  ],
  [
    "Butter Scotch",
    "Belgium Dark Chocolate",
    "Mango Thick Shake",
    "Oreo Thick Shake",
    "Straberry Thick Shake",
    "Kitkat",
    "Red Velvet Thick Shake",
    "Choco Thick Share",
    "Nuttella Thick Shake",
  ],
  ["Black Coffee", "Capucino Coffee", "Espresso"],
  [
    "Cheese Garlic Bread",
    "Garlic Bread",
    "Chicken Pizza",
    "Corn Pizza",
    "Panner Pizza",
    "Tandoori Chicken Pizza",
    "Cheeze Loaded Pizza",
    "Non Veg Loaded Pizza",
    "Veg Loaded Pizza",
  ],
  ["Chicken Alfredo", "Veg Alfredo"],
  ["Tandoori Nachos", "Cheese Nachos", "Nachos"],
  ["Chicken Tacos", "Veg Cheese Tacos"],
];

const prices = [
  ["139/-", "139/-", "139/-", "139/-", "299/-", "399/-", "199/-", "299/-"],
  [
    "129/-",
    "129/-",
    "169/-",
    "199/-",
    "179/-",
    "99/-",
    "199/-",
    "189/-",
    "199/-",
    "199/-",
    "199/-",
    "129/-",
    "129/-",
  ],
  [
    "169/-",
    "169/-",
    "179/-",
    "179/-",
    "169/-",
    "179/-",
    "169/-",
    "179/-",
    "179/-",
    "199/-",
    "199/-",
    "199/-",
    "149/-",
    "199/-",
    "209/-",
    "219/-",
    "199/-",
    "199/-",
    "169/-",
  ],
  ["179/-", "169/-", "179/-", "189/-", "189/-", "199/-", "189/-", "179/-"],
  [
    "139/-",
    "149/-",
    "139/-",
    "169/-",
    "159/-",
    "139/-",
    "169/-",
    "149/-",
    "149/-",
    "199/-",
    "159/-",
  ],
  [
    "169/-",
    "199/-",
    "149/-",
    "139/-",
    "149/-",
    "149/-",
    "189/-",
    "199/-",
    "349/-",
  ],
  [
    "199/-",
    "219/-",
    "199/-",
    "199/-",
    "209/-",
    "199/-",
    "199/-",
    "199/-",
    "219/-",
    "219/-",
    "249/-",
    "249/-",
  ],
  [
    "129/-",
    "129/-",
    "129/-",
    "129/-",
    "129/-",
    "129/-",
    "149/-",
    "149/-",
    "129/-",
    "129/-",
    "129/-",
    "149/-",
    "149/-",
    "149/-",
  ],
  [
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "249/-",
    "249/-",
  ],
  ["99/-", "149/-", "129/-"],
  [
    "199/-",
    "99/-",
    "199/-",
    "239/-",
    "239/-",
    "269/-",
    "199/-",
    "299/-",
    "189/-",
    "549/-",
  ],
  ["299/-", "269/-"],
  ["219/-", "199/-", "249 /-"],
  ["149/-", "139/-"],
];

// Functions
const el = (() => {
  const select_table = (i) => {
    if (i == 6) {
      table_num = prompt("Please enter your name");
      if (table_num == "") {
        reset();
        return 0;
      }
      table_num = table_num.toString();
    } else {
      table_num = i + 1;
      table_num = parseInt(table_num);
    }
    main.classList.remove("inactive");
    table.classList.add("inactive");
  };

  const createMenu = () => {
    let k = 5;
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < items[j].length; i++) {
        const deserts = main.childNodes[k];
        const dish_content = deserts.appendChild(document.createElement("div"));
        dish_content.classList.add("dish_content");
        dish_content.innerHTML = `
      <span class="dish">${items[j][i]}</span>
      <img src="./images/plus.svg" class="add_dish" alt="add to cart">
      <span class="price">₹${prices[j][i]}</span>`;
      }
      k += 2;
      plus = document.querySelectorAll(".add_dish");
    }
  };

  const dropDown = (i) => {
    section[i].classList.toggle("inactive");
  };

  const add_to_cart = (i) => {
    let dish_name = plus[i].parentElement.childNodes[1].innerHTML;
    let price = plus[i].nextElementSibling.innerHTML;
    if (i < 11) {
      dish_name = `${plus[i].parentElement.parentElement.childNodes[1].innerHTML} ${dish_name}`;
      console.log(plus[i].parentElement.parentElement.childNodes[1].innerHTML, dish_name);
    }
    if (i >= 12 && i <= 16) {
      price = plus[i].nextElementSibling.nextElementSibling.innerHTML.replace(
        /[^0-9]/g,
        ""
      );
      price = `${price}/-`;
    }
    const dish_price = plus[i].nextElementSibling;
    if (!check_duplicate(dish_name)) {
      const dish = cart.appendChild(document.createElement("div"));
      dish.classList.add("cart_item");
      dish.innerHTML = `
    <span class="item">${dish_name}</span>
    <button class="increase">+</button>
    <input class="quantity" min="0">
    <button class="decrease">-</button>
    <span class="item_price">${price}</span>`;
      dish.childNodes[5].value = 1;
      cart_item_quantity();
      update_amount();
    }
  };

  const check_duplicate = (str) => {
    if (cart.childNodes.length > 0) {
      for (let i = 0; i < cart.childNodes.length; i++) {
        if (cart.childNodes[i].childNodes[1].innerHTML == str) {
          return true;
        }
      }
    }
  };

  const cart_item_quantity = () => {
    increase = document.querySelectorAll(".increase");
    decrease = document.querySelectorAll(".decrease");
    quantity = document.querySelectorAll(".quantity");
    for (let i = 0; i < increase.length; i++) {
      increase[i].addEventListener("click", () => {
        quantity[i].value = parseInt(quantity[i].value) + 1;
        update_amount();
      });
      decrease[i].addEventListener("click", () => {
        if (parseInt(quantity[i].value) <= 1) {
          cart.removeChild(quantity[i].parentElement);
        } else {
          quantity[i].value = parseInt(quantity[i].value) - 1;
        }
        update_amount();
      });
    }
  };

  const update_amount = () => {
    let total = 0;
    const price = document.querySelectorAll(".item_price");
    const quantity = document.querySelectorAll(".quantity");
    const final_amount = document.querySelector(".total");

    for (let i = 0; i < quantity.length; i++) {
      const data = parseInt(price[i].innerHTML.replace(/[^0-9]/g, ""));
      const num = parseInt(quantity[i].value);
      total += data * num;
    }

    check_cart();
    final_amount.innerHTML = `₹${total}/-`;
  };

  const check_cart = () => {
    if (cart.innerHTML.length < 35) {
      cart.parentElement.classList.remove("active");
    } else {
      cart.parentElement.classList.add("active");
    }
  };

  const place_order = () => {
    const final_amount = document.querySelector(".total");
    let order_data = `table no/name: ${table_num}\ntotal: ${final_amount.innerHTML}\n\n`;
    for (let i = 0; i < cart.childNodes.length; i++) {
      const name = cart.childNodes[i].childNodes[1].innerHTML;
      const quantity = cart.childNodes[i].childNodes[5].value;
      const price = cart.childNodes[i].childNodes[9].innerHTML;
      order_data += `${name}\t(${quantity}) ${price}\n`;
    }
    sendMessage(order_data);
    alert(`order submitted for table/name: ${table_num}`);
    reset();
  };

  const sendMessage = (message) => {
    const botToken = "6207495871:AAHzcOy9XhS8T1GCodCgTKSPI5aR751UTBE";
    const chatId = "-1001957977299";
    const parseMode = "Markdown";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode,
      }),
    })
      .then((response) => {
        if (response.ok) {
        } else {
          console.error("Failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const reset = () => {
    close_cart();
    main.classList.add("inactive");
    table.classList.remove("inactive");
  };

  const close_cart = () => {
    cart.innerHTML = "";
    check_cart();
    for (let i = 0; i < section.length; i++) {
      section[i].classList.add("inactive");
    }
  };

  return {
    select_table,
    createMenu,
    dropDown,
    add_to_cart,
    cart_item_quantity,
    place_order,
  };
})();

// Events
for (let i = 0; i < section_name.length; i++) {
  section_name[i].addEventListener("click", () => {
    el.dropDown(i);
  });
}
el.createMenu();
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    el.add_to_cart(i);
  });
}

el.cart_item_quantity();
order.addEventListener("click", el.place_order);
for (let i = 0; i < tnum.length; i++) {
  tnum[i].addEventListener("click", () => {
    el.select_table(i);
  });
}
