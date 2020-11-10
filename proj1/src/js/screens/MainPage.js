import React from "react";
import { Strings } from "../../utils/strings";
import SearchSegment from "../components/SearchSegment";
import ListComponent from "../components/ListComponent";
import { FetchData } from "../../utils/services";
import { URL } from "../../utils/configs";
import Empty from '../components/Empty';
import Load from '../components/Load';

export default class MainPage extends React.Component {
  state = {
    isLoading: false,
    items: [],
    filteredItems: [],
    errorMessage: "",
  }; 

  filterItems = (searchedText) => {
    console.log("in filter items : ", searchedText);
    let items = this.state.items;

    items =
      searchedText.trim() !== ""
        ? items.filter((a) => a.indexOf(searchedText) !== -1)
        : items;
    console.log("filtered items : ", items);
    this.setState({ filteredItems: items });
  };

  checkResponseAndSetDate = (data) => {
    if (data && data.status === 200) {
      //everything is ok. set the items
      this.setState({
        items: data.resolve,
        filteredItems: data.resolve,
        errorMessage: "",
      });
    } else {
      //not okay response
      this.setState({ errorMessage: Strings.searchSection.connectionError });
    }
  };

  getFilesContent = async () => {
    this.setState({ isLoading: true });
    let data = await FetchData(
      `${URL.protocol}://${URL.baseURL}:${URL.port}/${URL.path}/filecontent`
    );

    console.log("data : ", data);
    this.checkResponseAndSetDate(data);
    this.setState({ isLoading: false });
  };
  componentDidMount = () => {
    this.getFilesContent();
  };
  render() {
    return (
      <div className="background">
        <SearchSegment filterItems={this.filterItems} />
        
        {this.state.isLoading ? (
            <Load />
          ) : this.state.filteredItems.length > 0 ? (
            
        <ListComponent data={this.state.filteredItems} />
          ) : (
            <Empty/>
          )}



        {this.state.errorMessage ? (
          <h3 className="text-danger text-center">{this.state.errorMessage}</h3>
        ) : null}
        <p>Test changes!!!!!</p>
      </div>
    );
  }
}
