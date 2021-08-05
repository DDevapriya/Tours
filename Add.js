import Tour from './Tour';
const Add = ({tours,removeTour,addTour}) => {
    return(
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div> 
            <div>
                <button className="btn" onClick={() => addTour(id)}>
                    Select
                </button>
            </div>
            <div>
                {tours.map((tour)=>{
                    return <Tour key={tour.id}{...tour} addTour={addTour}/>
                })}
            </div>
         </section>
    );
};
 
export default Add;
