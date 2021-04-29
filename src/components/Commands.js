import React from 'react'
import '../styles/Commands.css'
import commands_list from '../data/commands.json'

function Commands() {
    return (
        <div>
            <h3>Commands</h3>
            <div className="commands">
                <div class="list">
                    <div className="command_container">
                        {commands_list.map(categories =>
                            <div className="category-container">
                                <h4 className="category">{categories.category}</h4>
                                {categories.commands.map(command =>
                                    <div className="description-container">
                                        <div>
                                            <p className="name">.{command.name}</p>
                                            {/* For now I'll remove aliases */}
                                            {/* <p>
                                                {command.aliases.map(alias => <p className="name">.{alias}</p>)}
                                            </p> */}
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <p style={{
                                                width: '500px',
                                                fontWeight: '300',
                                                textAlign: 'start'
                                            }} classNmae="help">{command.help}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commands