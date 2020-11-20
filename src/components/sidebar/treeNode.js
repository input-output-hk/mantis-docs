import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';
import stripNumbers from '../../utils/stripNumbersFromPath'

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  url = stripNumbers(url)
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  else {

  }
  let active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  let borderTop

  if (title === "Install" || title === "Creating a Private Network" || title === "Reference") {
    borderTop = true
  }



  if ((!location && url === "/getting-started") || (!location && url === "/getting-started/")) {
    active = true
  }

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  return (
    <li className={calculatedClassName}>
      {hasChildren 
        ? title && 
          <div>
            {borderTop ? <hr className="accent"/> : ''}
            <a activeClassName="active" className='sectionHeading' onClick={collapse} >
              {title}
              {config.sidebar.frontLine && title && hasChildren ? (
                <button onClick={collapse} aria-label="collapse" className="collapser">
                  {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
                </button>
              ) : null}
              </a>
              {isCollapsed ? <hr  className="hide accent" /> : ''}
            </div>
        : 
        title && 
          <Link to={url}>
            {title}
            {!config.sidebar.frontLine && title && hasChildren ? (
              <button onClick={collapse} aria-label="collapse" className="collapser">
                {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
              </button>
            ) : null}
          </Link>
      }

      {!isCollapsed && hasChildren ? (
        <div>
          <ul>
            {items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                {...item}
              />
            ))}
          </ul>
          {!isCollapsed ? <hr  className="accent" /> : ''}
        </div>
      ) : null}
    </li>
  );
};

export default TreeNode;
