import React, { useState } from "react";
import Card from "../components/Card";
import { CourseItem } from "../assets/CourseData";

const Courses = () => {
	const [visibleItems, setVisibleItems] = useState(6); // Number of items currently displayed

	// Function to load more items
	const loadMore = () => {
		setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
	};

	return (
		<div className="flex flex-col px-10 py-14">
			<div className="text-3xl font-bold my-3">English Courses</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
				{CourseItem.slice(0, visibleItems).map((course, index) => (
					<Card
						key={index}
						image={course.image}
						title={course.title}
						lesson={course.lesson}
						student={course.student}
						level={course.level}
						link={course.link}
					/>
				))}
			</div>
			{visibleItems < CourseItem.length && (
				<div className="text-center mt-8">
					<button
						onClick={loadMore}
						className="bg-blue-500 text-white px-6 py-2 rounded"
					>
						See More
					</button>
				</div>
			)}
		</div>
	);
};

export default Courses;
