/*
Gamification designs (Toda et al.) applied to storyboards:
    
SF: Storyboard Fictional - 0
SP: Storyboard Personal - 1
SPF: Storyboard Performance - 2
SE: Storyboard Ecological - 3
SS: Storyboard Social - 4

Acc: Sense of Accomplishment - 0
Pr: Preference - 1

P: Philanthropist - 0
R: Player - 1
S: Socializer - 2
A: Achiever - 3
F: Free Spirit - 4
D: Disruptor - 5

Considering that the dominant is Philanthropist and that I wish to consider the users's sense of accomplishment,
I'd take PAcc -> x such as the value is the maximum between the Acc.

recommendationTable[PlayerType][Criteria][Storyboard]
*/

module.exports.BTable = [[[-0.006, 0.164, 0.149, 0.166, 0.005], [-0.029, -0.013, 0.02, 0.119, -0.095]],
                                    [[0.03, 0.109, 0.117, 0.162, 0.161], [0.042, 0.165, 0.009, -0.005, -0.148]],
                                    [[0.307, 0.154, 0.087, 0.094, 0.309], [-0.021, -0.092, -0.165, -0.13, 0.37]],
                                    [[0.157, 0.168, 0.295, 0.174, 0.238], [0.08, -0.064, 0.047, -0.113, 0.034]],
                                    [[0.058, -0.132, -0.063, -0.124, -0.128], [-0.021, 0.104, 0.04, 0.145, -0.226]],
                                    [[0.031, 0.09, 0.006, 0.026, 0.038], [-0.108, -0.104, 0.081, -0.104, 0.15]]];

module.exports.PTable = [[[0.951, 0.063, 0.082, 0.069, 0.956], [0.765, 0.890, 0.852, 0.242, 0.309]],
                        [[0.627, 0.101, 0.062, 0.014, 0.012], [0.613, 0.002, 0.892, 0.946, 0.031]],
                        [[0, 0.036, 0.204, 0.186, 0], [0.803, 0.284, 0.032, 0.081, 0]],
                        [[0.11, 0.066, 0.001, 0.075, 0.011], [0.444, 0.515, 0.667, 0.315, 0.724]],
                        [[0.429, 0.127, 0.351, 0.142, 0.154], [0.804, 0.261, 0.661, 0.066, 0.009]],
                        [[0.644, 0.231, 0.916, 0.732, 0.564], [0.189, 0.166, 0.258, 0.139, 0.017]]]