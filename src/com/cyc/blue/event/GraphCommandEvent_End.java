/*{{{
 *
 * Copyright (c) 2001 - 2002 Cycorp, Inc.  All rights reserved.
 * 
 * This software is the proprietary information of Cycorp, Inc.
 * Use is subject to license terms.
 *
 * @author John Jantos
 * @date 2002/05/01
 *
 * @version $Id: GraphCommandEvent_End.java,v 1.2 2002/05/23 22:30:14 jantos Exp $
 *
 *****************************************************************
 * Describe the class functionality
 *
 *****************************************************************
 * External interface:
 *
 * list of the public methods
 *
 *****************************************************************
 *}}}
 */

package com.cyc.blue.event;

import java.util.*;
import com.cyc.event.*;
import com.cyc.blue.graph.*;
import com.cyc.blue.command.*;

public class GraphCommandEvent_End extends GraphCommandEvent implements IsEvent {
  public GraphCommandEvent_End(IsGraph _graph, IsCommand _command) {
    super(_graph, _command);
  }
}
