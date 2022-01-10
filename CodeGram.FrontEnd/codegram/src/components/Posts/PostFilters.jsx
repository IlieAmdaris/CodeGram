import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './PostFilters.css';

const PostFilters = () => {
    return (
        <div className="d-flex flex-column bd-highlight mb-3 filters">
            <p className="m-3">
                ADVANCED SEARCH
            </p>
            <div className="d-flex justify-content-evenly filters-row">
                <div className="dropdown">
                    <button className="custom-custom-btn btn-1 custom-btn btn-1-1 d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                        <FaChevronDown className="arrow" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Looking for a project
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Hire a programmer
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="custom-btn btn-1 d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Date <FaChevronDown className="arrow" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Today
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                This week
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                This month
                            </label>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="custom-btn btn-1 d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Location <FaChevronDown className="arrow" />
                    </button>
                    <ul className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Moldova
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    USA
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Germany
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Russia
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Canada
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-evenly">
                <div className="dropdown">
                    <button className="custom-btn btn-1 d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Language <FaChevronDown className="arrow" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Python
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                JavaScript
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Java
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C#
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C++
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Go
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                R
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Swift
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                PHP
                            </label>
                        </div>

                    </ul>
                </div>
                <div className="dropdown">
                    <button className="custom-btn btn-1 d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Experience <FaChevronDown className="arrow" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Beginner
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Junior
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Middle
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Senior
                            </label>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="custom-btn btn-1 d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Field <FaChevronDown className="arrow" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Front End
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Back End
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Data Scientist
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Game Dev
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                DataBase Admin
                            </label>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PostFilters;