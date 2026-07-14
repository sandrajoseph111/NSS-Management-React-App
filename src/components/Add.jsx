import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {

    const [input, changeInput] = useState(


        {

            vId: "",
             fName: "",
              email: "",
              Phone: "",
               dob:"",
               gender:"",
               bg:"",
               dept:"",
               yearofStudy:"",
               campN:"",
               hoursCompleted:"",
               address:"",
               unitNo:"",
               

        }



    )
    const inputHandeler=(event)=>
    {

        changeInput({...input,[event.target.name]: event.target.value})

    }

    const readValue =()=>
    {


        console.log(input)
        axios.post("http://localhost:2000/Nss-add",input).then(

            (response) =>{

                console.log(response.data)
                alert("volunteer added suceessfully")
            }
        ).catch((error) => {
    console.log(error.response);
    console.log(error.response?.data);
    console.log(error.response?.status);
    alert("Failed to add Volunteer");
});


    }


  return (
    <div>

        
        <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Volunteer Id</label>
                            <input type="text" className="form-control" name="vId" value={input.vId} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="fName" value={input.fName} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email</label><br></br>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandeler} />
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="tel" className="form-control"name="Phone" value={input.Phone} onChange={inputHandeler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" name="dob" value={input.dob} onChange={inputHandeler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Gender</label>
                            <input type="text" className="form-control " name="gender" value={input.gender} onChange={inputHandeler}/>
                        </div>


                        


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Blood Group</label>
            
                            <select name="" id="" className="form-control" name="bg" value={input.bg} onChange={inputHandeler}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Department</label>
                            <input type="text" className="form-control" name="dept" value={input.dept} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Year Of Study</label>
                            <input type="text" className="form-control" name="yearofStudy" value={input.yearofStudy} onChange={inputHandeler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Camp Name</label>
                            <input type="text" className="form-control" name="campN" value={input.campN} onChange={inputHandeler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Hourse Completed</label>
                            <input type="text" className="form-control" name="hoursCompleted" value={input.hoursCompleted} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandeler} />
                        </div>




                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Unit Number</label>
                            <input type="text" className="form-control" name="unitNo" value={input.unitNo} onChange={inputHandeler} />
                        </div>


                            
                        



                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>



    </div>
  )
}

export default Add