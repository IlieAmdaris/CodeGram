import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillCalendarCheckFill } from "react-icons/bs"
import { FaCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import './PostItem.css';

const PostItem = (props) => {
    return (
        <div className="">
            <div className="flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column post">
                    <div className="d-flex justify-content-between">
                        <h5 className="text-decoration-none text-dark" href="#">{props.title}</h5>
                        <div className="me-1"><HiDotsVertical /></div>
                    </div>
                    <h6>
                        <a>{props.user}</a>
                    </h6>
                    <div className="d-flex flex-row align-items-center">
                        <IoLocationSharp className="me-1 location-icon" />
                        <div className="me-2 text-muted location">{props.location.value}</div>
                        <BsFillCalendarCheckFill className="me-1 location-icon" />
                        <div className="me-1 text-muted date">{props.date}</div>
                    </div>
                    <p className="card-text mb-auto">{props.bio}</p>
                    <div className="d-flex justify-content-start">
                        {props.tags.map((item, index) => {
                            return (
                                <div className="d-flex align-items-center me-2" key={index.toString()}>
                                    <FaCircle className={"me-1 tag " + item.value.toLowerCase()} />
                                    <div>{item.value}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
