import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:2000/view-Nss").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )
    return (
        <div>

            <h2 style={{ color: "#5eb084", textAlign: "center", fontFamily: "Montserrat" }}>
                View volunteer</h2>
            <table class="table">
                <thead>
                    <tr>


                        <th scope="col">Volunteer ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Department</th>
                        <th scope="col">Year of Study</th>
                        <th scope="col">Camp Name</th>
                        <th scope="col">Hours Completed</th>
                        <th scope="col">Address</th>
                        <th scope="col">Unit Number</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.vId}</td>
                                    <td>{data.fName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.Phone}</td>
                                    <td>{data.dob}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.bg}</td>
                                    <td>{data.dept}</td>
                                    <td>{data.yearofStudy}</td>
                                    <td>{data.campN}</td>
                                    <td>{data.hoursCompleted}</td>
                                    <td>{data.address}</td>
                                    <td>{data.unitNo}</td>

                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>


        </div>
    )
}

export default View