import React, { Component } from 'react';
import axios from 'axios';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
// import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';
import Genres from '../Components/Togglepage/Genres';
import SortBy from '../Components/Togglepage/SortBy';

export default class Moviespage extends Component {
    constructor(props) {
      console.log("consuctoe movie page")
        super(props)
        this.state={
            allvideo: [],
            loading: true,
            genrestoggle: false,
            sortbytoggle: false,
            genrestext:"Genres"
            
        }
    }


    getallvideo = (include ="" ) => {
        // const axios = require('axios');
        const FormData = require('form-data');
        let data = new FormData();
        data.append('category', 'movie');
        data.append('sort', 'date.DESC');
        data.append('cache_buster', '1690100054');
        data.append('platform', 'wedotv');
        if(include !== ""){
        data.append("include", include);

        }
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://api.watch4.com/v2/getAllVideos?page=1&limit=100',
          headers: { 
            token: localStorage.getItem("token"),
            // ...data.getHeaders()
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data.result.videos));
          this.setState({allvideo:response.data.result.videos});
          this.setState({ loading: false});
          this.setState({genrestoggle:false});
          if(include == "")
              this.setState({genrestext:"Genres"})
          else 
              this.setState({genrestext:include})
        })
        .catch((error) => {
          console.log(error);
          this.setState({ loading: false});
        });
        
    }

    componentDidMount(){
        this.getallvideo();
        console.log("components did mounted movie page")
    }
  
    render() {
        return (
<>
<div className="overflow-hidden bg-[#343a40] w-full h-[100vh]">
<div className="overflow-y-scroll scroll-smooth px-40">
          {/* <Navbar /> */}
          <HeaderNavbar/>
          <div className="container">
            <div className="flex justify-between" id="genreSortSection">
              <span className="text-3xl font-bold text-white">Movies</span>
              <div className="filter-inner flex gap-10 mr-100">
                <button
                 onClick={()=>{this.setState({genrestoggle:true})}}
                  className="bg-[#1c1c1c] min-w-[270px] text-white border border-none border-[#333] text-[24px] ml-[10px] text-left capitalize rounded-none py-3 px-[30px]"
                >
                  {this.state.genrestext}
                </button>
                <button
                onClick={()=>{this.setState({sortbytoggle:true})}}
                  className="bg-[#1c1c1c] min-w-[270px] text-white border border-none border-[#333] text-[24px]  text-left capitalize rounded-none py-3 px-[30px]"
                >
                  Sort By
                </button>
              </div>
            </div>
            <div className="my-10">{this.state.loading && <Loading/>}</div>
            <section className="vertical-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-[800px] w-full relative  gap-3 my-5">
              {
                this.state.allvideo.map((data)=>{
                    // console.log(data)
                    return(
                       <Link to={`/Moviedetail/${data.id}`} key={data.id}><img src={data.files.thumb_480} className="w-[250px] h-[325px] hover:border-4 hover:border-red-700 focus:border-4 focus:border-red-700" alt="" /></Link>
                    )
                })
              }
            </section>
          </div>
        </div>
</div>
{/* genres dom */}
{this.state.genrestoggle && <Genres selectedgenre={this.getallvideo} />}
{ this.state.sortbytoggle && <SortBy/>}
</>
        )
    }
}
