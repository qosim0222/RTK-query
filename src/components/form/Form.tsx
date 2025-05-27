// import React, { FormEvent, useState } from 'react'
// import { useCreatecommentMutation } from '../../redux/api/comment.api'

// const Form = () => {
//   const [text, setText] = useState("")
//   const [star, setStar] = useState("")
//   const [createCommit, { isLoading }] = useCreatecommentMutation()

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const newComment = {
//       text,
//       star: Number(star),
//       centrId : 151
//     }
//     createCommit(newComment)
//   }

//   return (
//     <div>
//       <h2>Form</h2>
//       <form onSubmit={handleSubmit} action="">
//         <input
//           type="text"
//           value={text}
//           onChange={e => setText(e.target.value)}
//           placeholder="Comment text"
//         />
//         <input
//           type="text"
//           value={star}
//           onChange={e => setStar(e.target.value)}
//           placeholder="Star rating"
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Loading...' : 'Create'}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default React.memo(Form)
