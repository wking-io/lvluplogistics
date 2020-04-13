// import React, { useState } from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import VisuallyHidden from "@reach/visually-hidden"

// import { StarIcon } from "../components/icons"
// import { Field, Textarea } from "../components/form"

// const getReviews = key =>
//   useStaticQuery(graphql`
//     query {
//       latest: allReviewsJson(limit: 8) {
//         edges {
//           node {
//             location
//             message
//             name
//             rating
//           }
//         }
//       }
//       all: allReviewsJson {
//         edges {
//           node {
//             location
//             message
//             name
//             rating
//           }
//         }
//       }
//     }
//   `)[key]

// const Review = ({ dark, location, message, name, rating }) => (
//   <li className="review">
//     <blockquote
//       className={`flex flex-col h-full border-2 border-grey-${
//         dark ? "100" : "300"
//       }`}
//     >
//       <div className="p-6 flex-1">
//         <div className="flex mb-4">
//           <StarIcon className="w-6 h-6 mr-1" filled={rating >= 1} />
//           <StarIcon className="w-6 h-6 mr-1" filled={rating >= 2} />
//           <StarIcon className="w-6 h-6 mr-1" filled={rating >= 3} />
//           <StarIcon className="w-6 h-6 mr-1" filled={rating >= 4} />
//           <StarIcon className="w-6 h-6" filled={rating >= 5} />
//         </div>
//         <p className="leading-relaxed">{message}</p>
//       </div>
//       <footer
//         className={`${
//           dark ? "bg-transparent text-white" : "bg-grey-300 text-black"
//         } border-t border-grey-${
//           dark ? "100" : "300"
//         } flex justify-between py-2 px-6`}
//       >
//         <p>
//           <cite className="not-italic font-bold">{name}</cite>
//         </p>
//         <p>{location}</p>
//       </footer>
//     </blockquote>
//   </li>
// )

// export const LatestReviews = ({ dark, label, ...props }) => {
//   const [showMore, setShowMore] = useState(false)
//   const reviews = getReviews("latest")

//   return (
//     <div {...props}>
//       <ul className="flex flex-wrap justify-between">
//         {reviews.edges.map(({ node }, i) =>
//           showMore || i <= 3 ? (
//             <Review key={node.name + i} dark={dark} {...node} />
//           ) : null
//         )}
//       </ul>
//       {reviews.edges.length >= 7 ? (
//         <div className="text-center">
//           {showMore ? (
//             <Link
//               className={`w-full md:w-auto px-16 py-4 btn btn--${
//                 dark ? "outline-light" : "outline"
//               }`}
//               to="/reviews"
//               data-track
//               data-event-category="Reviews"
//               data-event-action="Viewed All"
//               data-event-label={label}
//             >
//               View All Reviews
//             </Link>
//           ) : (
//             <button
//               className={`w-full md:w-auto px-16 py-4 btn btn--${
//                 dark ? "outline-light" : "outline"
//               }`}
//               onClick={() => setShowMore(true)}
//               data-track
//               data-event-category="Reviews"
//               data-event-action="Viewed More"
//               data-event-label={label}
//             >
//               View More Reviews
//             </button>
//           )}
//         </div>
//       ) : null}
//     </div>
//   )
// }

// export const Reviews = ({ dark, ...props }) => {
//   const reviews = getReviews("all")

//   return (
//     <div {...props}>
//       <ul className="flex flex-wrap justify-between">
//         {reviews.edges.map(({ node }, i) => (
//           <Review key={node.name + i} dark={dark} {...node} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// const RatingField = ({
//   value,
//   update,
//   hoverValue,
//   hoverUpdate,
//   large,
//   ...props
// }) => (
//   <div {...props}>
//     <VisuallyHidden>
//       <label htmlFor="rating">Rate Your Experience</label>
//       <input
//         id="rating"
//         name="rating"
//         type="range"
//         min="0"
//         max="5"
//         value={value}
//         onChange={({ target }) => update(target.value)}
//       />
//     </VisuallyHidden>
//     <button
//       type="button"
//       onClick={() => update(1)}
//       onMouseEnter={() => hoverUpdate(1)}
//       onMouseLeave={() => hoverUpdate(0)}
//     >
//       <StarIcon
//         className={large ? "w-12 h-12 mr-3" : "w-8 h-8 mr-2"}
//         filled={[value, hoverValue].some(x => x >= 1)}
//       />
//     </button>
//     <button
//       type="button"
//       onClick={() => update(2)}
//       onMouseEnter={() => hoverUpdate(2)}
//       onMouseLeave={() => hoverUpdate(0)}
//     >
//       <StarIcon
//         className={large ? "w-12 h-12 mr-3" : "w-8 h-8 mr-2"}
//         filled={[value, hoverValue].some(x => x >= 2)}
//       />
//     </button>
//     <button
//       type="button"
//       onClick={() => update(3)}
//       onMouseEnter={() => hoverUpdate(3)}
//       onMouseLeave={() => hoverUpdate(0)}
//     >
//       <StarIcon
//         className={large ? "w-12 h-12 mr-3" : "w-8 h-8 mr-2"}
//         filled={[value, hoverValue].some(x => x >= 3)}
//       />
//     </button>
//     <button
//       type="button"
//       onClick={() => update(4)}
//       onMouseEnter={() => hoverUpdate(4)}
//       onMouseLeave={() => hoverUpdate(0)}
//     >
//       <StarIcon
//         className={large ? "w-12 h-12 mr-3" : "w-8 h-8 mr-2"}
//         filled={[value, hoverValue].some(x => x >= 4)}
//       />
//     </button>
//     <button
//       type="button"
//       onClick={() => update(5)}
//       onMouseEnter={() => hoverUpdate(5)}
//       onMouseLeave={() => hoverUpdate(0)}
//     >
//       <StarIcon
//         className={large ? "w-12 h-12" : "w-8 h-8"}
//         filled={[value, hoverValue].some(x => x >= 5)}
//       />
//     </button>
//   </div>
// )

// const verify = ({ rating, message, name, city }) => {
//   return rating > 0 && [message, name, city].every(field => field.length > 0)
// }

// const TheForm = ({ dark = false, active = false, label }) => {
//   const [rating, updateRating] = useState(0)
//   const [hoverRating, updateHoverRating] = useState(0)
//   const [message, updateMessage] = useState("")
//   const [name, updateName] = useState("")
//   const [city, updateCity] = useState("")
//   const isValid = verify({ rating, message, name, city })
//   return (
//     <form
//       className={active ? "" : "pointer-events-none"}
//       name="create-review"
//       method="POST"
//       action="/review-thank-you"
//       netlify-honeypot="bot-field"
//       data-netlify="true"
//       data-track
//       data-event-category="Reviews"
//       data-event-action="Submit Review"
//       data-event-label={`${label} - Review - Form`}
//     >
//       <input type="hidden" name="form-name" value="create-review" />
//       <VisuallyHidden>
//         <label>
//           Don’t fill this out if you're human: <input name="bot-field" />
//         </label>
//       </VisuallyHidden>
//       <RatingField
//         className={dark ? "mb-4" : "text-center md:text-left mb-8"}
//         large={!dark}
//         value={rating}
//         update={updateRating}
//         hoverValue={hoverRating}
//         hoverUpdate={updateHoverRating}
//       />
//       <Textarea
//         name="message"
//         label="Message"
//         dark={dark}
//         value={message}
//         update={updateMessage}
//       />
//       <Field
//         name="name"
//         label="Full Name"
//         dark={dark}
//         value={name}
//         update={updateName}
//       />
//       <Field
//         name="city"
//         label="City"
//         dark={dark}
//         value={city}
//         update={updateCity}
//       />
//       <input
//         type="submit"
//         className={`${dark ? "" : "py-4"} btn btn--primary w-full`}
//         value="Submit Review"
//         disabled={!isValid}
//       />
//     </form>
//   )
// }

// export const ReviewForm = ({ dark = false, label }) => {
//   const START = 1
//   const CHOOSE = 2
//   const SUBMIT = 3

//   const [step, updateStep] = useState(START)

//   switch (step) {
//     case START:
//       return (
//         <button
//           className="w-full text-left"
//           data-track
//           data-event-category="Reviews"
//           data-event-action="Choose"
//           data-event-label={`${label} - Review - Choose`}
//           onClick={() => updateStep(CHOOSE)}
//         >
//           <TheForm dark={dark} label={label} />
//         </button>
//       )
//     case CHOOSE:
//       return (
//         <div className="w-full relative">
//           <div className="w-full absolute inset-0 bg-grey-600 text-center flex items-center justify-center flex-col z-10">
//             <h3 className="font-serif font-bold text-xl mb-4">
//               Do you have a gmail account?
//             </h3>
//             <a
//               className="btn btn--primary w-5/6 mb-4"
//               href="/review"
//               data-track
//               data-event-category="Reviews"
//               data-event-action="Start Google Review"
//               data-event-label={`${label} - Review - Yes`}
//             >
//               Yes
//             </a>
//             <button
//               className="btn btn--outline-light w-5/6"
//               onClick={() => updateStep(SUBMIT)}
//               data-track
//               data-event-category="Reviews"
//               data-event-action="Start Site Review"
//               data-event-label={`${label} - Review - No`}
//             >
//               No
//             </button>
//           </div>
//           <TheForm dark={dark} label={label} />
//         </div>
//       )
//     case SUBMIT:
//       return <TheForm dark={dark} label={label} active={true} />

//     default:
//       return (
//         <button
//           className="w-full text-left"
//           data-track
//           data-event-category="Reviews"
//           data-event-action="Choose"
//           data-event-label={`${label} - Review - Choose`}
//           onClick={() => updateStep(CHOOSE)}
//         >
//           <TheForm dark={dark} />
//         </button>
//       )
//   }
// }
