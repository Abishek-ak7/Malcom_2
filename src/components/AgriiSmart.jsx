import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons';
// Import your images
import appIcon from '../assets/images/agriismart-icon.png';
import screenshot1 from '../assets/images/agriismart-screenshot.jpeg'
import screenshot2 from '../assets/images/screenshot.jpeg';
import screenshot3 from '../assets/images/screenshot2.jpeg';
// Import your APK file
import apkFile from '../assets/downloads/agriismart.apk';

const AgriISmart = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'John Doe', rating: 5, comment: 'Amazing app! Helped me increase my crop yield by 30%.' },
        { id: 2, name: 'Jane Smith', rating: 4, comment: 'Very useful for farmers. Needs more language support.' },
    ]);
    const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

    // Array of screenshots
    const screenshots = [
        { id: 1, image: screenshot1, alt: "AgriISmart Home Screen" },
        { id: 2, image: screenshot2, alt: "AgriISmart Crop Monitoring" },
        { id: 3, image: screenshot3, alt: "AgriISmart Weather Forecast" }
    ];

    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = apkFile;
        link.download = 'agriismart.apk'; // You can set the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.comment) {
            setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
            setNewReview({ name: '', rating: 5, comment: '' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        AgriISmart
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        The smart farming solution for modern agriculture
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 p-8 flex items-center justify-center">
                            <img className="h-48 w-48 object-contain" src={appIcon} alt="AgriISmart App Icon" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold mb-1">Mobile Application</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">AgriISmart Farming Assistant</h2>
                            <div className="flex items-center mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon 
                                        key={star} 
                                        icon={faStar} 
                                        className={`${star <= 4 ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`}
                                    />
                                ))}
                                <span className="ml-2 text-gray-600">4.2 (128 reviews)</span>
                            </div>
                            <p className="text-gray-700 mb-6">
                                AgriISmart is a comprehensive farming assistant that helps you monitor crops, get weather updates, 
                                pest alerts, and connect with agricultural experts. Our AI-powered recommendations help optimize 
                                your farming practices for maximum yield.
                            </p>
                            <button 
                                onClick={handleDownload}
                                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                            >
                                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                Download APK (v2.1.3)
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">App Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {screenshots.map((screenshot) => (
                            <div key={screenshot.id} className="bg-white p-4 shadow rounded-lg">
                                <img 
                                    src={screenshot.image} 
                                    alt={screenshot.alt} 
                                    className="w-full h-auto rounded object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rest of your component remains the same */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">Crop Monitoring</h4>
                            <p className="text-gray-600">Track your crop growth stages and get alerts for important activities.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">Weather Forecast</h4>
                            <p className="text-gray-600">Hyper-local weather predictions to plan your farming activities.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">Pest & Disease Alerts</h4>
                            <p className="text-gray-600">Get early warnings about potential pest outbreaks in your area.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">Expert Connect</h4>
                            <p className="text-gray-600">Chat with agricultural experts for personalized advice.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">User Reviews</h3>
                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-lg shadow">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-lg">{review.name}</h4>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FontAwesomeIcon 
                                                key={star} 
                                                icon={faStar} 
                                                className={`${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-600">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Add Your Review</h3>
                    <form onSubmit={handleReviewSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={newReview.name}
                                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Rating</label>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setNewReview({...newReview, rating: star})}
                                        className="mr-2 focus:outline-none"
                                    >
                                        <FontAwesomeIcon 
                                            icon={faStar} 
                                            className={`${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'} w-6 h-6`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="comment">Review</label>
                            <textarea
                                id="comment"
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={newReview.comment}
                                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgriISmart;