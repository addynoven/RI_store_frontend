import CategoryCard from "@/components/custom-components/CategoryCard";
import React from "react";

const Category = () => {
	const categories = [
		"bracelets",
		"necklaces",
		"earrings",
		"rings",
		"gold-set",
		"silver-set",
	];
	return (
		<>
			<div className="grid grid-cols-6 gap-x-5 border-y-2 mt-1 py-5 border-[#e9ecef]">
				{categories.map((category) => (
					<CategoryCard
						key={category}
						category={category}
						ImgSrc={"assets/img/category/" + category + ".jpg"}
					/>
				))}
			</div>
		</>
	);
};

export default Category;
