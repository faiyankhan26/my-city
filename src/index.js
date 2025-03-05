import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-orange-600">Welcome to My City</h1>
            <p className="text-gray-700 text-center mt-2">Nagpur, the Orange City, is a cultural,
                 historical, and economic hub of central India.</p>

            <div className="mt-5">
                <h2 className="text-2xl font-semibold text-gray-800">Tourist Destinations</h2>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Deekshabhoomi 🛕: A significant Buddhist monument and a symbol of peace.</li>
                    <li>Zero Mile Stone 📍: Marks the geographical center of India.</li>
                    <li>Futala Lake 🌊: A scenic spot known for its fountains and vibrant evening lights.</li>
                    <li>Sitabuldi Fort 🏰: A historic fort with ties to the British era.</li>
                </ul>
            </div>

            <div className="mt-5">
                <h2 className="text-2xl font-semibold text-gray-800">Local Food</h2>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Tarri Poha 🥣: A popular breakfast dish made of rice, served with spicy tarri.</li>
                    <li>Oranges & Orange Barfi 🍊: Nagpur famous oranges and the sweet made from it.</li>
                    <li>Dabeli 🌮: A street food, similar to vada pav but with a sweet and spicy filling.</li>
                    <li>Matka Roti 🍞: A large, thick roti cooked over an inverted clay pot.</li>
                </ul>
            </div>

            <div className="mt-5">
                <h2 className="text-2xl font-semibold text-gray-800">Shopping & Markets</h2>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Sadar Bazar 🛍️: Best for clothes, street food, and accessories.</li>
                    <li>Sitabuldi Market 👗: Famous for budget shopping and street vendors.</li>
                    <li>Mahal Bazaar 🍊: Best place to buy Nagpur’s famous oranges.</li>
                </ul>
            </div>

            <div className="mt-5">
                <h2 className="text-2xl font-semibold text-gray-800">Nature & Wildlife</h2>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Pench National Park 🐅: A famous tiger reserve near Nagpur.</li>
                    <li>Tadoba Andhari Tiger Reserve 🌿: A must-visit for wildlife lovers.</li>
                    <li>Gorewada Lake & Zoo 🦁: Ideal for nature enthusiasts and families.</li>
                </ul>
            </div>
  
        </div>
    </div>
)