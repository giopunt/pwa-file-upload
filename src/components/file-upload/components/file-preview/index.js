import { connect } from "react-redux";

import FilePreview from "./component";
import { discardFile } from "../../../../state/uploads/actions";

const mapDispatchToProps = {
  discard: discardFile
};

export default connect(() => ({}), mapDispatchToProps)(FilePreview);
