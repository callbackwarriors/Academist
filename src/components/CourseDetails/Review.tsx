import React from 'react';
import Image from 'next/image';
import c2 from 'assets/images/c2.jpg'
import { BiLike, BiDislike } from 'react-icons/bi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Progress } from 'react-sweet-progress';

const Review = () => {
    return (
        <div>
            <div className="tab1 my-10 px-5 py-5">
                <div className="review grid grid-cols-3">
                    <div className="part1 border-r-2">
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
                    <div className="part2 col-span-2">
                        <div className="box px-5 grid grid-cols-2">

                            <div className="box2 py-3 ml-4">
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

                            <div className="box2 py-3 ml-4">
                                <p>4 star</p>
                                <p> <Progress percent={75} /></p>
                            </div>

                            <div className="box2 py-3 ml-4">
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

                            <div className="box2 py-3 ml-4">
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

            <div className="tab1 my-10 px-5 py-5">
                <h5>Item Reviews</h5>
                <div className="persion grid grid-cols-3 border-b-2">
                    <div className="imgSection">
                        <Image src={c2} alt="" />
                    </div>
                    <div className="desSection mx-4 col-span-2">
                        <h6>Josaph Manrty</h6>
                        <div className="star flex">
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

                <div className="persion grid mt-4 grid-cols-3 border-b-2">
                    <div className="imgSection">
                        <Image src={c2} alt="" />
                    </div>
                    <div className="desSection mx-4 col-span-2">
                        <h6>Josaph Manrty</h6>
                        <div className="star flex">
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

            <div className="tab1 my-10 px-5 py-5">
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