import React from 'react'
import { Routes, Route } from 'react-router'

import Home from "../Components/Home/HomeCom";
import SearchFilter from "../Components/Search Filter/SearchFilterCom";
import FeatchAPI from "../Components/Api Call/ApicallCom";
import Debounce from "../Components/DebounceingSearch/DebounceSearchCom";
import FormHandle from "../Components/Form Handling/FormHandlingCom";
import PropPassing from "../Components/Prop Passing/PropPassingCom";
import TodoList from "../Components/Todo List/TodoListCom";
import ImageSlider from "../Components/ImageSlider/ImageSliderCom";
import StarRating from "../Components/Star Rating/StarRatingCom";
import TicTacToe from "../Components/TicTacToe/TictactoeCom";
import NotFound from "../Components/NotFound/NotFound";

const AllRoutes = () => {
  return (
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/searchfilter" element={<SearchFilter />} />
    <Route path="/featchapi" element={<FeatchAPI />} />
    <Route path="/debounce" element={<Debounce />} />
    <Route path="/form" element={<FormHandle />} />
    <Route path="/prop" element={<PropPassing />} />
    <Route path="/todo" element={<TodoList />} />
    <Route path="/imageslider" element={<ImageSlider />} />
    <Route path="/starrating" element={<StarRating/>} />  
    <Route path="/tictactoe" element={<TicTacToe />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default AllRoutes
