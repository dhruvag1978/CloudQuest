import { motion } from "framer-motion";

const CollaboratorPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-4xl w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
		>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
					Collaborator Dashboard
				</h2>
				<p className="text-gray-300 text-center">
					Welcome, Collaborator! Here you can manage and contribute to roadmaps.
				</p>
				{/* Add Tiptap editor here later */}
			</div>
		</motion.div>
	);
};

export default CollaboratorPage;
