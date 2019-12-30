## Usage

`Citizens.getNPCRegistry()` - returns the Citizens NPCRegistry.

`Citizens.getNPCSelector()` - returns the Citizens NPCSelector.

`Citizens.get(id)` - get an NPC by ID.

`Citizens.create(name, type)` - creates a new NPC, with an optional `type` (defaults to EntityType.PLAYER).

`Citizens.spawn(npc, location, skin)` - spawns an existing NPC, with an optional `skin` for PLAYER NPCs. Example:

```js
const Citizens = require("Citizens");

command.create("friend", "drupi", sender => {
    const player = cast.asPlayer(sender);

    const NPC = Citizens.create("MyOnlyFriend", org.bukkit.entity.EntityType.PLAYER);

    // You can use a player name
    Citizens.spawn(NPC, player.getLocation(), player.getName());

    // Or an object containing skin data
    Citizens.spawn(NPC, player.getLocation(), {
        uuid: "520ee58f-a7e5-4aea-b7be-3ac6d5f82e1f",
        signature: "OGUll8HtT9xira3hNfcG5hPMMjZtpaHWP4h1XY8lZiW/Ay85EWISx7MWa1R749abnWzqrvvVW7387hOFS1+hLiGGhgzIm/iQ5+yxwAtjUde9/aOqQnjZW2CroKE+zx4IXjFgLzlNjBc6vLKuaENqgDQ4zi7lP+I5NMTKpXrb6fusjEl1wTeDHtBKinuNKzYqs58uzIumFkuvXv0L3zKps90ZYwnB4O6m6H2liUWRkb5s/JRq8pLQIUPhSlo8pWP9niqGoVreGmkMEy52U1KK647Nb8Ad/EA23/+AR+wUM3gRi6giZzXfa5pDMcMg5qHpH3XGCDMrps8wm6EV2fNDQdcnvZ+IgdzsV/L6zHADXsFHXEAUmWJPI1ZXkLcra5yPTPWiSc5gZAqBuC/ojjwHzIn1HOXlKAPhdxqadQ7MzBsFzXTF+pHJ6Vp1NM5HMbO1O2GXwd1RjOfMCOqkiC45UN2E5J2HVDwWEQtl9e3+0wQxYrLMObZ5mRW+MIcrI+rjcE+bY9XqASL/9oVRZgMFSQQHC+HnXzdkaegRcc+kmzmmvPPnRmYjw9bb+Rj6qHwVPmb7oIoIfq/pRhHqceVx80D7M4HvUA8Dj6psJwRjYHoHIsKGEc5fpPxQWB3R2mgDKHd1V73HDpfKcoeb91/B3uP8CO9Ev/0Gpp/5ZzyQ9u4=",
        data: "eyJ0aW1lc3RhbXAiOjE1Nzc1ODk0NDE4NzAsInByb2ZpbGVJZCI6ImI3NDc5YmFlMjljNDRiMjNiYTU2MjgzMzc4ZjBlM2M2IiwicHJvZmlsZU5hbWUiOiJTeWxlZXgiLCJzaWduYXR1cmVSZXF1aXJlZCI6dHJ1ZSwidGV4dHVyZXMiOnsiU0tJTiI6eyJ1cmwiOiJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2FlM2ViOWRhMWUwMGQ5MDZiZjZmZDY2YzY2Yzc0ZjI0MmMyZGNhNGY2N2E4NjRiYWEzNjM3OWY2YjhmZjE4MTkifX19"
    });

});
```

`Citizens.setSkin(npc, skin)` - change the skin of an already spawned NPC. You can use either a player name, or an object containing skin data, exactly the same as `Citizens.spawn`.


´Citizens.on("event", handler)` - Listen to citizens events. Example:

```js
const Citizens = require("Citizens");
var PluginLoaded = require("PluginLoaded");

PluginLoaded("Citizens", ()=>{
    Citizens.on("NPCRightClickEvent", event => {
        event.getClicker().sendMessage("Npc ID: " + event.getNPC().getId());
    })
})
```
Events:
- [CitizensDeserialiseMetaEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CitizensDeserialiseMetaEvent.html)
- [CitizensDisableEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CitizensDisableEvent.html)
- [CitizensEnableEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CitizensEnableEvent.html)
- [CitizensPreReloadEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CitizensPreReloadEvent.html)
- [CitizensReloadEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CitizensReloadEvent.html)
- [CitizensSerialiseMetaEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CitizensSerialiseMetaEvent.html)
- [CommandSenderCloneNPCEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CommandSenderCloneNPCEvent.html)
- [CommandSenderCreateNPCEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/CommandSenderCreateNPCEvent.html)
- [EntityTargetNPCEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/EntityTargetNPCEvent.html)
- [NPCAddTraitEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCAddTraitEvent.html)
- [NPCCloneEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCCloneEvent.html)
- [NPCCollisionEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCCollisionEvent.html)
- [NPCCombustByBlockEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCCombustByBlockEvent.html)
- [NPCCombustByEntityEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCCombustByEntityEvent.html)
- [NPCCombustEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCCombustEvent.html)
- [NPCCreateEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCCreateEvent.html)
- [NPCDamageByBlockEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCDamageByBlockEvent.html)
- [NPCDamageByEntityEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCDamageByEntityEvent.html)
- [NPCDamageEntityEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCDamageEntityEvent.html)
- [NPCDamageEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCDamageEvent.html)
- [NPCDeathEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCDeathEvent.html)
- [NPCDespawnEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCDespawnEvent.html)
- [NPCEnderTeleportEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCEnderTeleportEvent.html)
- [NPCLeftClickEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCLeftClickEvent.html)
- [NPCOpenDoorEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCOpenDoorEvent.html)
- [NPCPushEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCPushEvent.html)
- [NPCRemoveEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCRemoveEvent.html)
- [NPCRemoveTraitEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCRemoveTraitEvent.html)
- [NPCRightClickEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCRightClickEvent.html)
- [NPCSelectEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCSelectEvent.html)
- [NPCSpawnEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCSpawnEvent.html)
- [NPCTeleportEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCTeleportEvent.html)
- [NPCTraitCommandAttachEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCTraitCommandAttachEvent.html)
- [NPCTraitEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/NPCTraitEvent.html)
- [PlayerCloneNPCEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/PlayerCloneNPCEvent.html)
- [PlayerCreateNPCEvent](https://jd.citizensnpcs.co/net/citizensnpcs/api/event/PlayerCreateNPCEvent.html)


