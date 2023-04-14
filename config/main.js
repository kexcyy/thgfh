const { GatewayIntentBits, Partials } = require('discord.js');
const presenceData = require('../JSON/presence.json');

module.exports = {
    // Client configuration:
    client: {
        // Constructor:
        constructor: {
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.User,
                Partials.GuildMember,
                Partials.Reaction
            ],
            presence: {
                activities: [
                    {
                        name: presenceData.activity,
                        type: presenceData.activity_type
                    }
                ],
                status: presenceData.status
            }
        },
        // Identification:
        token: "MTA5NjIyMTY4NDc2NTI5ODc1OQ.GiGfru.qKNH1CqtZJIQmbSHIdqwHyqCinhdSXpfUBlbxo",
        id: "1096221684765298759"
    },

    // Database:
    database: {
        mongodb_uri: 'mongodb+srv://jaydenstorm927:Apexpred17@cluster0.mfry44c.mongodb.net/test'
    },

    // APIs:
    apis: {
        
    },

    // Users:
    users: {
        developers: ["857011629917077534"]
    }
};