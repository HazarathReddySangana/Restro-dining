import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ChefHat } from 'lucide-react';

const dishDescriptions = {
  '01': {
    description: 'Tender pan-seared chicken breast tossed in a velvety garlic parmesan cream sauce, served over al dente fettuccine pasta with fresh parsley.',
    chefNote: "Chef's Special: Aged Reggiano cheese melted to perfection.",
    tags: ['Popular', 'Creamy', 'Italian Classic'],
  },
  '02': {
    description: 'Arborio rice slowly simmered in rich vegetable broth with wild forest mushrooms, finished with white truffle oil and Parmigiano-Reggiano.',
    chefNote: 'Infused with seasonal chanterelles and porcini.',
    tags: ['Vegetarian', 'Truffle Infused', 'Gluten-Free Option'],
  },
  '03': {
    description: 'Vine-ripened heirloom tomatoes, buffalo mozzarella, fresh basil leaves, drizzled with 18-year aged Modena balsamic glaze and extra virgin olive oil.',
    chefNote: 'Crafted with daily hand-pulled mozzarella.',
    tags: ['Fresh', 'Organic', 'Vegetarian'],
  },
  '04': {
    description: 'Handmade Italian meatballs crafted from prime beef and herbs, slow-simmered in San Marzano marinara, crowned over bronze-die spaghetti.',
    chefNote: 'Recipe passed down through three generations.',
    tags: ['Hearty', 'Traditional', "Diner's Choice"],
  },
  '05': {
    description: 'Crisp romaine hearts, shaved Parmesan, artisanal sourdough garlic croutons, and house-made creamy anchovy garlic dressing.',
    chefNote: 'Crisped with house-churned garlic herb butter.',
    tags: ['Crisp & Light', 'Signature Dressing'],
  },
  '06': {
    description: 'Wild-caught North Atlantic salmon filet grilled over cedar wood planks, served with charred asparagus and lemon-dill hollandaise reduction.',
    chefNote: 'Sustainably sourced and cooked to medium perfection.',
    tags: ['High Protein', 'Gluten-Free', 'Wild Caught'],
  },
  '07': {
    description: 'USDA Prime dry-aged 14oz ribeye steak, seared over cast iron with rosemary and roasted garlic butter, paired with truffled potato purée.',
    chefNote: 'Aged 28 days for maximum tenderness and deep marbling.',
    tags: ['Prime Cut', 'Chef Recommended', 'Signature Dish'],
  },
  '08': {
    description: 'Black tiger shrimp, Manila clams, and tender calamari simmered in a white wine garlic broth with ripe cherry tomatoes over linguine.',
    chefNote: 'Fresh catch delivered directly from coastal fisheries.',
    tags: ['Seafood', 'Coastal Classic', 'White Wine Sauce'],
  },
};

export default function DishDetailModal({ dish, onClose, onBookTable }) {
  if (!dish) return null;

  const info = dishDescriptions[dish.id] || {
    description: 'Expertly prepared with fresh seasonal ingredients and authentic spices.',
    chefNote: "Crafted with passion by our kitchen brigade.",
    tags: ["Chef's Pick", 'Fresh'],
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 size-8 rounded-full bg-zinc-900/10 hover:bg-zinc-900/20 grid place-content-center transition cursor-pointer"
          >
            <X className="size-4 text-zinc-700" />
          </button>

          {/* Image & Header */}
          <div className="bg-gradient-to-b from-orange-50 to-orange-100/50 p-8 flex flex-col items-center text-center relative">
            <motion.img
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              src={dish.img}
              alt={dish.title}
              className="size-40 sm:size-48 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-2xl font-medium font-urbanist text-zinc-900">
                {dish.title}
              </h3>
              <span className="text-xl font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full shrink-0">
                {dish.price}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {info.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-4">
              {info.description}
            </p>

            {/* Chef's Note */}
            <div className="flex items-start gap-2.5 bg-orange-50/70 border border-orange-100/80 rounded-xl p-3 text-xs text-orange-900 mb-6">
              <ChefHat className="size-4 text-orange-600 shrink-0 mt-0.5" />
              <span>{info.chefNote}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="w-1/3 py-3 border border-slate-200 text-zinc-700 hover:bg-slate-50 rounded-full font-medium text-sm transition cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookTable?.();
                }}
                className="w-2/3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full transition shadow-md shadow-orange-500/25 cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="size-4" />
                <span>Reserve with this dish</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

