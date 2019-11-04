import React from 'react'

const ShowCorrectAnswers = ({ quizInfo }) => {

   return (
      <div>
         <button type="button" className="btn btn-outline-danger" data-toggle="collapse" data-target="#answer-table">See answers!</button>
         <div id="answer-table" className="collapse">
            <table className="table table-hover">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Question</th>
                     <th scope="col">Correct answer</th>
                     <th scope="col">Your answer</th>
                  </tr>
               </thead>
               <tbody>
                  {quizInfo.map((q, i)=>{
                     return (
                        <tr key={i+1}>
                           <th scope="row">{i+1}</th>
                           <td>{q.question}</td>
                           <td>{q.correct_answer}</td>
                           <td>{q.user_answer}</td>
                        </tr> 
                     )
                  })}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default ShowCorrectAnswers;