import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'

import {Navbar ,Footer,Sidebar, ThemeSettings} from './components';

import {Ecommerce,Orders,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line,Calender} from "./pages"

import { useStateContext } from './contexts/ContextProvider'


const App = () => {
  //in the initial stage i was using this 
  // const activeMenu = true

  //the same i am using after creating context api
  const {activeMenu} = useStateContext()
  
  return (
    <>
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position='Top'>
            <button type='button'
            className='text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white'
            style={{background:"blue", borderRadius:'50%'}}>
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg
          bg-white'>
            <Sidebar/>
          </div>
        ): (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar/> 
          </div>
        )}
        <div className={activeMenu ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full" : "dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full"}>

          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar/>
          </div>
        </div>

        <div>
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Ecommerce/>}/>
            <Route path="/ecommerce" element={<Ecommerce/>}/>

            {/* Products */}
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/customers" element={<Customers/>}/>

            {/* Apps */}
            <Route path="/kanban" element={<Kanban/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/calender" element={<Calender/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>
            {/* Charts */}
            <Route path="/line" element={<Line/>}/>
            <Route path="/area" element={<Area/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/financial" element={<Financial/>}/>
            <Route path="/color-mapping" element={<ColorMapping/>}/>
            <Route path="/pyramid" element={<Pyramid/>}/>
            <Route path="/stacked" element={<Stacked/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App