# 15 — Drone Review Test Sheet

**Covers:** Review-day prep, image testing, flight testing, battery endurance, tracking, obstacle avoidance, controller/app UX, portability, and post-flight evidence capture

## Preconditions

- Test drone available with latest public firmware installed
- All batteries charged and labelled
- Controller charged
- MicroSD cards formatted
- Safe legal flying location selected
- Weather suitable for flying
- Same test route and same test scenes used across drones wherever possible

## Test Metadata

- Drone model:
- Firmware version:
- Controller used:
- Battery count:
- Test date:
- Start time:
- Location:
- Wind conditions:
- Temperature:
- Light conditions:
- Pilot:
- Observer:

---

### DR01 — Pre-flight prep and kit check

**Steps:**
1. Lay out the drone, controller, batteries, props, chargers, and any test markers
2. Confirm firmware is current
3. Confirm propellers and arms are in good condition
4. Confirm compass/IMU warnings are resolved before flight
5. Confirm SD card space is available for stills and video

**Record:**
- Total kit weight
- Bag/case used
- Missing accessories
- Any pre-flight warnings
- Time taken to move from packed state to ready state

**Expected:**
- No unresolved safety warnings
- No missing essentials
- Drone is flight-ready without unusual setup friction

**Pass:** `[ ]`

---

### DR02 — Setup speed and GPS lock

**Steps:**
1. Start with the drone fully packed away
2. Start a timer
3. Unpack the drone and controller
4. Power on and wait for GPS/home point readiness
5. Stop the timer when the drone is ready to take off

**Record:**
- Bag closed to powered-on time
- Powered-on to GPS lock time
- Total bag-to-ready time
- Any app prompts, updates, or calibration interruptions

**Expected:**
- Setup process is predictable and repeatable
- GPS lock time is reasonable for the environment
- No unnecessary delays or confusing prompts

**Pass:** `[ ]`

---

### DR03 — Daylight photo test

**Steps:**
1. Fly the same framing used for other review drones
2. Capture one standard JPEG image
3. Capture one RAW image if supported
4. Capture one high-contrast scene including sky, shadows, and fine detail
5. Capture one foliage or texture-heavy scene

**Record:**
- File formats captured
- Exposure mode used
- White balance mode used
- Sharpness/detail notes
- Highlight and shadow retention notes
- Colour accuracy notes
- Processing artefacts or over-sharpening notes

**Expected:**
- Images are sharp and usable
- Fine detail is retained
- High-contrast scene does not collapse highlights or shadows excessively

**Pass:** `[ ]`

---

### DR04 — Low-light photo test

**Steps:**
1. Return to the same low-light or dusk scene used for other drones
2. Capture one standard still image
3. Capture one RAW still if supported
4. Capture one scene with practical lights, darker shadows, and mixed contrast

**Record:**
- Noise level
- Smearing or detail loss
- Colour shift
- Shadow usability
- Any slow shutter or processing issues

**Expected:**
- Image remains usable in low light
- Noise and detail loss stay within reasonable limits for the class
- Exposure behaviour feels predictable

**Pass:** `[ ]`

---

### DR05 — Standard video pass test

**Steps:**
1. Record one slow forward pass
2. Record one side pass
3. Record one ascent
4. Record one descent
5. Record one smooth pan or yaw movement
6. Repeat the same path in the default main video mode

**Record:**
- Resolution and frame rate used
- Stabilisation performance
- Horizon consistency
- Rolling shutter notes
- Bitrate/compression notes
- General footage confidence and ease of grading

**Expected:**
- Footage is stable and clean
- Motion is controlled and not overly jittery
- No major horizon or compression issues

**Pass:** `[ ]`

---

### DR06 — Hover precision and wind stability

**Steps:**
1. Hover at a fixed height above a marked ground point for 30-60 seconds
2. Repeat with a side-on camera view if possible for visual drift assessment
3. Repeat in moderate wind if conditions are still safe and legal
4. Note any aggressive corrections or unstable footage

**Record:**
- Hover height used
- Estimated drift
- Wind level during test
- Stability of recorded footage
- Pilot confidence notes

**Expected:**
- Drone holds position confidently
- Corrections are controlled rather than erratic
- Footage remains usable in realistic outdoor conditions

**Pass:** `[ ]`

---

### DR07 — Real flight time run 1

**Steps:**
1. Start at 100% battery
2. Fly a consistent mixed-use pattern including hover, slow movement, and normal filming passes
3. Continue until the defined review cutoff battery level is reached
4. Land safely and stop the timer

**Record:**
- Start battery
- Cutoff battery
- Total airborne time
- Flight style notes
- Wind conditions

**Expected:**
- Runtime is logged cleanly and can be compared to other drones
- Flight style remains consistent with the standard review pattern

**Pass:** `[ ]`

---

### DR08 — Real flight time run 2

**Steps:**
1. Repeat DR07 with a fresh battery
2. Keep the flight pattern as close as possible to run 1

**Record:**
- Total airborne time
- Any variation in wind or flight conditions
- Any battery behaviour differences

**Expected:**
- Runtime stays broadly consistent with run 1
- No unusual battery behaviour

**Pass:** `[ ]`

---

### DR09 — Real flight time run 3

**Steps:**
1. Repeat DR07 again with a third battery or recharged pack
2. Keep the route and flight behaviour consistent

**Record:**
- Total airborne time
- Best result
- Worst result
- Median runtime

**Expected:**
- Three-run average is suitable for final review reporting
- No unexplained runtime anomalies

**Pass:** `[ ]`

---

### DR10 — Tracking and intelligent features route

**Steps:**
1. Use the same subject route as other drones
2. Run a walking subject test
3. Run a turning/cornering subject test
4. Run a partial occlusion or temporary obstruction test if safe
5. Run a faster subject test, such as cycling, if the drone supports it

**Record:**
- Modes tested
- Subject retention quality
- Framing quality
- Reacquisition quality
- Failure points
- Smart-mode usefulness notes

**Expected:**
- Tracking remains usable and predictable
- Subject loss/recovery behaviour is easy to understand
- Smart modes improve shooting rather than add friction

**Pass:** `[ ]`

---

### DR11 — Obstacle avoidance and return-to-home confidence

**Steps:**
1. Use a safe open test layout with visible obstacles
2. Test slow forward approach toward obstacles
3. Test warning timing and braking behaviour
4. Test any rerouting or bypass behaviour if supported
5. Trigger a controlled return-to-home test

**Record:**
- Warning distance/noticeability
- Braking confidence
- Rerouting behaviour
- Return-to-home path confidence
- Any false positives or missed hazards

**Expected:**
- System warns clearly and early enough
- Braking feels trustworthy
- Return-to-home behaviour is consistent and confidence-inspiring

**Pass:** `[ ]`

---

### DR12 — Controller, app, and live-view experience

**Steps:**
1. Fly a full normal session using the standard app/controller setup
2. Review map view, telemetry, camera controls, and quick setting changes
3. Test screen visibility outdoors
4. Note any lag, stutters, or connection drops

**Record:**
- Controller comfort
- Screen brightness/readability
- Menu clarity
- Live-view quality
- Connection stability
- Overall app/controller friction

**Expected:**
- Controller feels comfortable and intuitive
- App supports the flight without getting in the way
- Live view and controls remain reliable throughout the session

**Pass:** `[ ]`

---

### DR13 — Portability, packing, and relaunch friction

**Steps:**
1. Pack the drone into its normal carrying setup
2. Note folded footprint and accessory burden
3. Unpack and relaunch after a short landing/reset cycle

**Record:**
- Folded size
- Carrying convenience
- Accessory burden
- Relaunch time
- Travel-friendliness notes

**Expected:**
- Drone is practical to carry for its class
- Relaunch is quick and not frustrating
- Accessory sprawl is manageable

**Pass:** `[ ]`

---

### DR14 — Price, value, and ownership notes

**Steps:**
1. Record the current price paid or active street price used for review context
2. Record battery, charger, and accessory cost if relevant
3. Compare what is included in the box versus what the buyer still needs
4. Note any geofencing, setup, or ownership friction

**Record:**
- Current price reference
- Extra battery cost
- Useful included accessories
- Missing essentials
- Value notes

**Expected:**
- Buyer-cost context is clear
- Ownership friction is documented alongside core performance

**Pass:** `[ ]`

---

### DR15 — Media capture audit and review readiness

**Steps:**
1. Confirm all photo and video assets are backed up
2. Confirm filenames or folders are labelled clearly
3. Confirm the following have been captured:
   - daylight stills
   - low-light stills
   - standard video passes
   - hover/wind footage
   - tracking footage
   - obstacle/RTH notes
4. Confirm written notes are complete enough to support the review

**Record:**
- Missing assets
- Missing notes
- Re-test items
- Backup status

**Expected:**
- Evidence set is complete enough to support a written review
- Any missing captures are identified before wrap-up

**Pass:** `[ ]`

---

## Review Summary

- Strongest area:
- Weakest area:
- Most surprising result:
- Conditions that may have affected results:
- Best captured asset:
- Missing re-test item:
- Recommended comparison drones:
- Ready for scoring and write-up: `[ ]`
