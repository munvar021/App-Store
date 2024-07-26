// Write your code here
// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const tabItemClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li>
      <button
        className={tabItemClassName}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
