import c2 from 'assets/images/c2.jpg';
import Image from 'next/image';
import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Progress } from 'react-sweet-progress';

const Review = () => {
    return (
        <div>
            <div className="px-5 py-5 my-10 tab1">
                <div className="grid grid-cols-3 review">
                    <div className="border-r-2 part1">
                        <h4>4.2</h4>
                        <p>Out Of 5</p>
                        <div className="flex">
                            <h6> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaRegStar /></h6>
                        </div>
                    </div>
                    <div className="col-span-2 part2">
                        <div className="grid grid-cols-2 px-5 box">

                            <div className="py-3 ml-4 box2">
                                <p>5 star</p>
                                <Progress
                                    percent={80}
                                    status="error"
                                    theme={{
                                        error: {
                                            symbol: '80%',
                                            color: 'green'
                                        }
                                    }}
                                />
                            </div>

                            <div className="py-3 ml-4 box2">
                                <p>4 star</p>
                                <p> <Progress percent={75} /></p>
                            </div>

                            <div className="py-3 ml-4 box2">
                                <p>3 star</p>
                                <Progress
                                    percent={40}
                                    status="error"
                                    theme={{
                                        error: {
                                            symbol: '40%',
                                            color: '#fbc630'
                                        }
                                    }}
                                />
                            </div>

                            <div className="py-3 ml-4 box2">
                                <p>1 star</p>
                                <Progress
                                    percent={20}
                                    status="error"
                                    theme={{
                                        error: {
                                            symbol: '20%',
                                            color: 'red'
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 py-5 my-10 tab1">
                <h5>Item Reviews</h5>
                <div className="grid grid-cols-3 border-b-2 persion">
                    <div className="imgSection">
                        <Image src={c2} alt="" width="100"
                            height="100" />
                    </div>
                    <div className="col-span-2 mx-4 desSection">
                        <h6>Josaph Manrty</h6>
                        <div className="flex star">
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                        </div>
                        <p>" Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris. "</p>
                        <div className="flex mt-4">
                            <div className="flex mr-4">
                                <p>12</p>
                                <h6 className="px-1"> <BiLike /></h6>
                            </div>
                            <div className="flex">
                                <p>14</p>
                                <h6 className="px-1"><BiDislike /></h6>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-3 mt-4 border-b-2 persion">
                    <div className="imgSection">
                        <Image src={c2} alt="" width="100"
                            height="100" />
                    </div>
                    <div className="col-span-2 mx-4 desSection">
                        <h6>Josaph Manrty</h6>
                        <div className="flex star">
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                            <h6 className="px-1"> <FaStar /></h6>
                        </div>
                        <p>" Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris. "</p>
                        <div className="flex mt-4">
                            <div className="flex mr-4">
                                <p>12</p>
                                <h6 className="px-1"> <BiLike /></h6>
                            </div>
                            <div className="flex">
                                <p>14</p>
                                <h6 className="px-1"><BiDislike /></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 py-5 my-10 tab1">
                <h5>Your Reviews</h5>
                <div className="giveReview">
                    <form action="">
                        <div className="flex gap-5">
                            <div className="div1">
                                <p className="mb-3">Your name</p>
                                <input type="text" placeholder="Your Name" name="name" />
                            </div>
                            <div className="div1">
                                <p className="mb-3">Your Email</p>
                                <input type="email" placeholder="Your Email" name="email" />
                            </div>
                        </div>
                        <p className="mt-5">Your Review</p>
                        <textarea placeholder="Review"></textarea>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;