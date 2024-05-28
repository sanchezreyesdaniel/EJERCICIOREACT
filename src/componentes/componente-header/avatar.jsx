export function Avatar(){
    return(
  <div className="flex ml-4 mt-4 ">
   <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Avatar" className="object-cover w-full h-full" />
      </div>
      <h1 className="mt-2 ml-4 text-lg font-bold  hover:text-purple-700 transition duration-500">Daniel Sanchez</h1>
  </div>
    )
}