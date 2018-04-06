import { connect } from "react-redux";

import Home from "./component";

const mapStateToProps = state => ({
  files: state.uploads.files
});

export default connect(mapStateToProps)(Home);
