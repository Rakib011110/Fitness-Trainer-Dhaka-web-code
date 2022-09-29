import React from 'react';

const Question = () => {
    return (
        <div className='container'>
            <div class="" id="">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h3>  Question No 1: How Does React Work ?</h3>
                            React make a copy of our Actula DOM.When state or component change, React goes through its virtual DOM, creates a list of those changes that need to be made to the actual DOM and then does it all in one single process
                        </div>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                            <h3>Question No 2: What is the difference between Props and State ?</h3>
                            1. Props is used for passed data from one component to another, State Data is passed within the component only.
                            2. Propos is Immutable ( cannot be modified ) , State is Mutable ( can be modified )
                            3. Props can be used with state and functional components, State can be used only with the state components/class component
                            4. Props are read-only , State is both read and write.
                        </div>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h3>Question No 2: What is the use case for useEffect ?</h3>
                            useEffect use cases
                            1. Running once on mount: fetch API data
                            2. Running on state change: validating input field
                            3. Running on state change: live filtering
                            4. Running on state change: trigger animation on new array value
                            5. Running on props change: update paragraph list on fetched API data update
                            6. Running on props change: updating fetched API data to get BTC updated price etc.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Question;