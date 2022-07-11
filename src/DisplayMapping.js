import React, {Component} from 'react';

class DisplayMapping extends Component {
  render() {
    const { movies, userMovieMapping } = this.props;
    
    return (
      
      <div>{Object.values(movies).map(({id, name}) => (
      <li key={id}>
        <h2> {name} </h2>

		{/* We CANNOT use if-else inside of JSX.
        EITHER use ternary operator
        OR create an if-else block outside JSX, pass the required JSX to variable `var` and call `var` here
        OR create an anonymous function with if-else and call the function in place */}
      	{(userMovieMapping[name] !== undefined) ?
         	(<div>
             <h3> Liked by: </h3>
              <ul>
                {userMovieMapping[name].map(userName => {
                  return (<li key = {userName}>
                    {userName}
                  </li>)
                })} 
              </ul>
             </div>) :
            <p>None of the current users liked this movie.</p>
        }
      </li>
	))}</div>);
  }
}

export default DisplayMapping;