/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React, { Component } from 'react' 
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents();
    headComponents.sort((a, b) => {
      if (a.type === 'meta') {
        return -1;
      } else if (b.type === 'meta') {
        return 1;
      }
      return 0;
    });
    replaceHeadComponents(headComponents);
  };

