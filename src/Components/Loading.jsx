const Loading =()=>{
    return(
        <div className="w-full h-full bg-green-900 flex justify-center items-center relative">

            <div className="w-8 h-8 border-3 border-red-500 rounded-full border-t-0 border-l-0 animate-spin" ></div>
            <div className="absolute w-8 h-8 border-3 border-white rounded-full border-r-0 border-b-0 border-l-0 animate-spin"></div>


        </div>        
    )
}

export default Loading