/**
 * Portal Component
 *
 * The following code is a derivative of the amazing work done by the Material UI team.
 * Original source: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Portal/Portal.js
 */

import { Children, cloneElement, forwardRef, useState } from "react";
import { createPortal, findDOMNode } from "react-dom";
import { setRef, useEnhancedEffect, useForkRef } from "../../utils";

function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return findDOMNode(container);
}

const Portal = forwardRef(
  ({ children, container, isDisabled = false, onRendered }, ref) => {
    const [mountNode, setMountNode] = useState(null);
    const handleRef = useForkRef(children.ref, ref);

    useEnhancedEffect(() => {
      if (!isDisabled) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, isDisabled]);

    useEnhancedEffect(() => {
      if (mountNode && !isDisabled) {
        setRef(ref, mountNode);
        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, isDisabled]);

    useEnhancedEffect(() => {
      if (onRendered && (mountNode || isDisabled)) {
        onRendered();
      }
    }, [onRendered, mountNode, isDisabled]);

    if (isDisabled) {
      Children.only(children);
      return cloneElement(children, {
        ref: handleRef
      });
    }

    return mountNode ? createPortal(children, mountNode) : mountNode;
  }
);

Portal.displayName = "Portal";

export default Portal;
