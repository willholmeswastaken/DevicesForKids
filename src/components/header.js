import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="w-full container mx-auto p-6">
    <div className="w-full flex items-center justify-between">
      <span className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
        {siteTitle}
			</span>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
