import { connect } from "react-redux";

import FileUpload from "./component";
import { addFile } from "../../state/uploads/actions";

const mapDispatchToProps = {
  addFile: addFile
};

export default connect(() => ({}), mapDispatchToProps)(FileUpload);
