import React, { useEffect } from "react";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-json";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "../../assets/js/prismjs/copy-to-clipboard";

import styles from "../../styles/components/Code.module.scss";

export default function Code({ language, code }) {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className={styles.wrapper__code}>
      <pre data-prismjs-copy="sadas" className="line-numbers copy-to-clipboard">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
