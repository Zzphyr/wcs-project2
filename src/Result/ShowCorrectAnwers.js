import React from 'react'

const ShowCorrectAnswers = ({ quizInfo }) => {

   return (
      <div>
         <button type="button" class="btn btn-outline-danger" data-toggle="collapse" data-target="#answer-table">See answers!</button>
         <div id="answer-table" class="collapse">
            <table class="table table-hover">
               <thead class="thead-dark">
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
                        <>
                        <tr>
                           <th scope="row">{i+1}</th>
                           <td>{q.question}</td>
                           <td>{q.correct_answer}</td>
                           <td>{q.user_answer}</td>
                        </tr>
                        </>
                     )
                  })}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default ShowCorrectAnswers;